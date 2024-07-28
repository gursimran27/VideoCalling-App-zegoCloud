import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [val, setVal] = useState();
  const navigate = useNavigate();

  const handleJoinRoom = useCallback(()=>{
    navigate(`/room/${val}`);
  },[val,navigate])

  return (
    <div className=" w-full h-[100vh] flex justify-center items-center bg-yellow-200">
      <diV className=" flex flex-col justify-center items-center gap-4">
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          type="text"
          placeholder="  enter room id"
          className=" border-2 border-red-300 rounded-xl h-10"
        />
        <button onClick={handleJoinRoom} className=" w-full border rounded-md px-1 py-1 bg-red-400">
          join
        </button>
      </diV>
    </div>
  );
};

export default HomePage;
