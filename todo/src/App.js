import logo from './logo.svg';
import './App.css';
import Data from './List/Data';
import Weather from './List/Weather';
import AddList from './List/AddList';
import Dayloop from './List/Dayloop';
import Music from './List/Music';
import TodoItem from './List/TodoItem'

import { useState } from 'react';

function App() {
  const [isData , setData] = useState('');

  function addlistData(data){
    setData(data);
    console.log('상끌성공');
  }
  
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
        <TodoItem data={isData}/>
        <AddList addlistData={addlistData} />
        <Music />
      </header>  
    </div>
  );
}

export default App;
