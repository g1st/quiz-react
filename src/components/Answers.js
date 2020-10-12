import React, { useState } from 'react';

const Answers = ({ question, increaseScore, decreaseLives }) => {
  const [answerIsPicked, setAnswerIsPicked] = useState(false);

  const handleAnswer = (selectedAnswer) => {
    setAnswerIsPicked(true);
    if (selectedAnswer === question.correct_answer) {
      increaseScore();
    } else {
      decreaseLives();
    }
  };

  const possibleAnswers = question.incorrect_answers.concat(
    question.correct_answer
  );

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }

    return array;
  };

  return (
    <div>
      {shuffleArray(possibleAnswers).map((answer, i) => {
        return (
          <button
            key={i}
            onClick={() => handleAnswer(answer)}
            disabled={answerIsPicked ? true : false}
          >
            {decodeURIComponent(answer)}
          </button>
        );
      })}
    </div>
  );
};

export default Answers;
