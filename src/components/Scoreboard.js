import React from 'react';

const Scoreboard = ({ score, lives }) => {
  return (
    <div>
      <div>Lives: {lives}</div>
      <div>Score: {score}</div>
    </div>
  );
};

export default Scoreboard;
