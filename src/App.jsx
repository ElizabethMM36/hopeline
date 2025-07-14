import React from 'react';
import Quiz from './components/Quiz';
import Chatroom from './components/Chatroom';
import './App.css';

function App() {
  return (
    <div className="app">
      <h1>Hopeline </h1>
      <Quiz />
      <Chatroom />
    </div>
  );
}

export default App;
