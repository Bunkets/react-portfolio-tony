// src/components/RotatingBoards.jsx
import React from 'react';
import './RotatingBoards.css'; // Import the CSS file here
import b1 from '../assets/b1.png';
import b2 from '../assets/b2.png';
import b3 from '../assets/b3.png';

const RotatingBoards = () => {
  return (
    <div className="rotating-boards-container">
      <div className="board board1">
        <img src={b1} alt="Go Board 1" />
      </div>
      <div className="board board2">
        <img src={b2} alt="Go Board 2" />
      </div>
      <div className="board board3">
        <img src={b3} alt="Go Board 3" />
      </div>
    </div>
  );
};

export default RotatingBoards;
