import logo from './logo.svg';
import './App.css';
import Data from './List/Data';
import Weather from './List/Weather';
import AddList from './List/AddList';
import Music from './List/Music';
import TodoList from './List/TodoList'

import { useState,useRef } from 'react';
import styled from "styled-components";



function App() {
  const [isData , setData] = useState([
    // {
    //   id: -1,
    //   text: '열심히 공부하기',
    //   checked: true
    // },
    // {
    //   id: -2,
    //   text: '멋있게 밥먹기',
    //   checked: true
    // }
  ]);
  const nextId = useRef(0);

  function addlistData(data){
    const todo = {
      id: nextId.current,
      text :data,
      checked: false,
    }; 
    setData(isData.concat(todo));
    nextId.current += 1;
    console.log(isData);
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
        <AddList addlistData={addlistData} />
        <TodoList data={isData}/>
        {/* <Music /> */}
      </header>  
    </div>
  );
}

export default App;
