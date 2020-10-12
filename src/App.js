import React, { useState } from 'react';
import getQuestion from './components/getQuestion';
import Answers from './components/Answers';
import Question from './components/Question';
import Scoreboard from './components/Scoreboard';
import PlayGame from './components/PlayGame';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [lives, setLives] = useState(3);
  const [score, setScore] = useState(0);
  const [loading, data] = getQuestion({ score, lives });

  const increaseScore = () => {
    setScore(score + 1);
  };

  const decreaseLives = () => {
    setLives(lives - 1);
  };

  const handleStart = () => {
    setLives(3);
    setScore(0);
    setGameStarted(true);
  };

  if (lives < 1) {
    alert(`Game Over. Score: ${score}`);
    setGameStarted(false);
    setLives(3);
  }

  if (!gameStarted) {
    return <PlayGame handleStart={handleStart} />;
  }
  return (
    <div>
      <Scoreboard score={score} lives={lives} />
      {loading ? (
        <div>Loading question...</div>
      ) : (
        <>
          <Question question={data.question} />
          <Answers
            question={data}
            increaseScore={increaseScore}
            decreaseLives={decreaseLives}
          />
        </>
      )}
    </div>
  );
}

export default App;
