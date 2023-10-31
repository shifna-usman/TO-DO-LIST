import React from 'react';
import { useState } from 'react';
import './App.css';

function App() {
  const[state,setState]=useState([])
  const[toDo,setToDo]=useState('')
  const addTodo = () => {
    if (toDo) {
      setState([...state, toDo]);
      setToDo('');
    }

  }
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i  onClick={addTodo} className="fas fa-plus"></i>
      </div>
      {state.map((value)=>{
        return(
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input type="checkbox" name="" id="" />
            <p>{value}</p>
          </div>
          <div className="right">
            <i className="fas fa-times"></i>
          </div>
        </div>
      </div>)
    })
}

    </div>
  );
}

export default App;