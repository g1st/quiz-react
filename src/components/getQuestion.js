import { useState, useEffect } from 'react';

const useQuestion = ({ score, lives }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    const api = `https://opentdb.com/api.php?amount=1&difficulty=easy&encode=url3986`;
    setLoading(true);
    fetch(api)
      .then((res) => res.json())
      .then(
        (data) => {
          setData(data.results[0]);
          setLoading(false);
        },
        (err) => {
          console.error(err);
          setLoading(false);
        }
      );
  }, [score, lives]);

  return [loading, data];
};

export default useQuestion;
