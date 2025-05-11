import React from 'react';
import './App.css';
import MyFirstComponent from './components/MyFirstComponent';

function App() {
  return (
    <div className="App">
      <h1>Микита</h1>
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png"
        alt="React Logo"
        width="200"
      />
      <br />
      <a href="https://react.dev/" target="_blank" rel="noopener noreferrer">
        React doc
      </a>
      <MyFirstComponent />
    </div>
  );
}

export default App;