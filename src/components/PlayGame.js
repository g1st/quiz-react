import React from 'react';

const PlayGame = ({ handleStart }) => {
  const clickHandler = () => {
    handleStart();
  };

  return (
    <div>
      <button onClick={clickHandler}>Start</button>
    </div>
  );
};

export default PlayGame;
