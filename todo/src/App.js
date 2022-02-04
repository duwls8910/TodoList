import logo from './logo.svg';
import './App.css';
import Data from './List/Data';
import Weather from'./List/Weather';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>yeojin's Todo List  </h1>
        <div className='row'>
          <div className='date'>
            Date :  <Data /> <br/>
          </div>
          <div className='weather'>
            <Weather />
          </div>  
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://youtu.be/UdVjs8bH8Jo"
          target="_blank"
          rel="noopener noreferrer"
        >
          추천 BGM
        </a>
      </header>
    </div>
  );
}

export default App;
