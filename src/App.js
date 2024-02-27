import logo from './logo.svg';
import './App.css';

function App() {
  // line below - imperative programming
  const curr_tim= new Date().getFullYear();
  return (
    //the whole block below - declarative programming.
    <div className="App">
      <header className="App-header">
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
        {/* Code for current year */}
        <span className="year"> { curr_tim } </span>
      </header>
    </div>
  );
}

export default App;
