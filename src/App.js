
import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/Hone';
import Room from './pages/Room';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </div>
  );
}

export default App;
