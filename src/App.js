
// import our components and anything else
// we need to for our App.js to render/return
import React, { useState } from 'react';
import './App.css';
import Cards from "./components/cards"
import Input from "./components/Input"
import Header from "./components/header"

// uuid is a npm install that will give us
// an ID for each item added to the array
import uuidv1 from "uuid/v1"

function App() {

  // hook that will update toDoArr
  const [toDoArr, setToDoArr] = useState([])

  // adding each input to the array as an object
  function addToDo(newTodoItem) {

    const obj = {
      id: uuidv1(),
      // OR Date.now()

      // test is set to the text from the input
      text: newTodoItem,

      // giving a value of false so that it can be
      // changed to true when clicked and vice versa
      completed: false
    }

    // spread attrabute
    setToDoArr([...toDoArr, obj])
  }

  // this function will be used for changing the completed,
  // working on it button that is displaye don the card.
  function setCompleted(id) {

    
    setToDoArr((todos) => {

      // map over the todos and get each value
      return todos.map(function (todo) {

        // if id is equal to todo.id return the "completed" code.
        if (id === todo.id) {

          // using the vang operator that will change the boolean value
          // to the opposite. If its true, it changes it to false
          return {...todo, completed: !todo.completed}

        } else {
          // else, just return the todo array
          return { ...todo}
        }
      })
    })
  }

  // return our data and routes, send to index to display on the page
  return (

    <div className="App">
      <Header />
      {/* Passing in props so they can be used in different components */}
      <Input addToDo = {addToDo} />
      <Cards todos = {toDoArr} setCompleted = {setCompleted}/>
    </div>

  );
}

export default App;
