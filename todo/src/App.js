import logo from './logo.svg';
import './App.css';
import Data from './List/Data';
import Weather from './List/Weather';
import AddList from './List/AddList';
import Dayloop from './List/Dayloop';

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todo List</h1>
      
        <div className='row'>
          <div className='date'>
            Date :  <Data /> <br/>
          </div>
          <div className='weather'>
            <Weather />
          </div>  
        </div>
        
        <img src={logo} className="App-logo" alt="logo" />
        <AddList />
        <a
          className="App-link"
          href="https://youtu.be/UdVjs8bH8Jo"
          target="_blank"
          rel="noopener noreferrer"
        >
          BGM
        </a>
      </header>  
    </div>
  );
}

export default App;
