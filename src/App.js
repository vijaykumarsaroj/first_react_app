import logo from './logo.svg';
import './App.css';
import {name,email} from './index'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>HomePage</h1>
        <form>
        <h3>Login Page</h3>
        <input type="text" value={name} placeholder='YourName'></input>
        <br/>
        <input type="text" value={email} placeholder='xyz@pqr.com'></input>
        <br/>
        <button>Login</button>
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
