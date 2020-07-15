import React from 'react';
import './App.css';

function logMessages() {
  console.log('This is a standard console log message.');
  console.error('This is a console error message.');
  console.warn('This is a console warning message.');
}

function App() {
  logMessages();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Welcome to{' '}
          <a
            className="App-link"
            href="https://github.com/henryjin3/heroku-logging-react-app"
          >
            heroku-logging-react-app
          </a>
          . Check the console for messages.
        </p>
        <button onClick={logMessages}>Log more messages</button>
      </header>
    </div>
  );
}

export default App;
