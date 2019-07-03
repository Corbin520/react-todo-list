import React, { useState } from 'react';
import './App.css';
import Cards from "./components/cards"
import Input from "./components/Input"

// uuid is a npm install that will give us
// an ID for each item added to the array
import uuidv1 from "uuid/v1"

function App() {

  // hook updating
  const [toDoArr, setToDoArr] = useState([])

  // adding each input to the array
  function addToDo(newTodoItem) {
    const obj = {
      id: uuidv1(),
      // OR Date.now()
      text: newTodoItem,
      completed: false
    }
    // spread attrabute
    setToDoArr([...toDoArr, obj])
    console.log(toDoArr)
  }


  return (
    <div className="App">
      {/* Passing in props so they can be used in the components */}
      <Input addToDo = {addToDo} />
      <Cards todos = {toDoArr} />
    </div>
  );
}

export default App;
