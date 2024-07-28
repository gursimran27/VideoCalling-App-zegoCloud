import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";

const Room = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();



  const myMeeting = async (element) => {
    const appID = 1468240143;
    const serverSecret = "dd3294d91b03e24fb31f728e6f93c93f";

    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomId,
      Date.now().toString(),
      "Gursimran singh",
    ); //userID, userName

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'copy',
          url:`http://localhost:3000/room/${roomId}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
      showScreenSharingButton: true,
      showPreJoinView: false,
      turnOnCameraWhenJoining: false,
    //   showLayoutButton: true,
    //   showPinButton: true,
      showRoomTimer: true, 
    //   showLeavingView: false,
      onJoinRoom: () => {console.log('joined')}, 
      onLeaveRoom: () => {setTimeout(()=>navigate("/"),[2000])},
      onUserJoin: () => console.log('user joined'),
      onUserLeave: () => navigate("/"),
      maxUsers:2
  
    });
  };

  return (
    <div
      ref={myMeeting}
      style={{ width: "100vw", height: "100vh" }}
    />
  );
};

export default Room;
