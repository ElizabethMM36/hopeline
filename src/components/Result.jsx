
import React from 'react';

const getLevel = (score) => {
  if (score <= 3) return { level: "Low Risk", advice: "Stay informed and keep healthy habits!" };
  if (score <= 7) return { level: "Moderate Risk", advice: "Consider talking to a counselor or trusted adult." };
  return { level: "High Risk", advice: "Seek help. You're not alone. Support is available." };
};

const Result = ({ score }) => {
  const { level, advice } = getLevel(score);

  return (
    <div className="result">
      <h2>Your Risk Level: {level}</h2>
      <p>{advice}</p>
      <h4>Support Resources:</h4>
      <ul>
        <li><a href="https://www.narconon.org/drug-abuse/" target="_blank">Narconon – Drug Help</a></li>
        <li><a href="https://www.samhsa.gov/find-help/national-helpline" target="_blank">SAMHSA Helpline</a></li>
        <li><a href="https://www.7cups.com/" target="_blank">7 Cups – Online Therapy</a></li>
      </ul>
    </div>
  );
};

export default Result;
