import React from 'react';

const Question = ({ question }) => {
  const encodedQuestion = question;
  const decodedQuestion = decodeURIComponent(encodedQuestion);

  return <div>{decodedQuestion}</div>;
};

export default Question;
