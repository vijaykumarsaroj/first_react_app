// App.js
import React from 'react';
import logo from './logo.svg';
import './App.css';
import { name, email } from './index'; // Import the exported variables

function App() {
  const handleNameChange = (e) => {
    name = e.target.value; // Update the 'name' variable when the input value changes
  };

  const handleEmailChange = (e) => {
    email = e.target.value; // Update the 'email' variable when the input value changes
  };

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Name:", name);
    console.log("Email:", email);
    // Add your login logic here or handle the form submission
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>HomePage</h1>
        <form onSubmit={handleLogin}>
          <h3>Login Page</h3>
          <input
            type="text"
            value={name}
            onChange={handleNameChange} // Add onChange handler to update 'name'
            placeholder="YourName"
          />
          <br />
          <input
            type="text"
            value={email}
            onChange={handleEmailChange} // Add onChange handler to update 'email'
            placeholder="xyz@pqr.com"
          />
          <br />
          <button type="submit">Login</button>
        </form>
        <p>Welcome to React Course on codingninjas.com</p>
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
