import React, { useState } from 'react';
import './App.css';
import Cards from "./components/cards"
import Input from "./components/Input"
import Header from "./components/header"

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
    // returns what is in the array
    console.log(toDoArr)
  }

  function setCompleted(id) {
    console.log("setCompleted function working")
    setToDoArr((todos) => {
      return todos.map(function (todo) {
        if (id === todo.id) {
          return {...todo, completed: !todo.completed}
        } else {
          return { ...todo}
        }
      })
    })
  }

  return (
    <div className="App">
      <Header />
      {/* Passing in props so they can be used in the components */}
      <Input addToDo = {addToDo} />
      <Cards todos = {toDoArr} setCompleted = {setCompleted}/>
    </div>
  );
}

export default App;
