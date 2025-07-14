// src/components/Quiz.jsx
import React, { useState } from 'react';
import Result from './Result';

const questions = [
  { text: "Have you used substances to cope with stress recently?", score: 2 },
  { text: "Have you ever felt guilty about your substance use?", score: 2 },
  { text: "Do you feel peer pressure to try drugs or alcohol?", score: 1 },
  { text: "Have you lied to someone about your drug use?", score: 2 },
  { text: "Do you crave a substance regularly?", score: 3 },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const handleAnswer = (value) => {
    if (value) setScore(score + questions[current].score);
    const next = current + 1;
    if (next < questions.length) setCurrent(next);
    else setDone(true);
  };

  if (done) return <Result score={score} />;

  return (
    <div className="quiz">
      <h2>{questions[current].text}</h2>
      <button onClick={() => handleAnswer(true)}>Yes</button>
      <button onClick={() => handleAnswer(false)}>No</button>
    </div>
  );
};

export default Quiz;
