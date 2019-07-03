
import React from "react"

function Cards({todos, setCompleted}) {

    // 

    return (
        <div>
            {/* map() over the todos and display them to a card on the screen */}
            {todos.map( (todo) => {

                return(

                // pass the ID in to each card so that we can update the spacific card
                <div key={todo.id} className="card w-50">
                    <div className="card-body">
                        <h3 className="card-title">{todo.text}</h3>
                        <p>Click the button to update the status of your To-Do Items</p>
                        <p className="card-text"></p>

                        {/* When the button is clicked, call our setCompleted function */}
                        <button onClick={() => setCompleted(todo.id)} className="btn btn-primary">

                        {/* todo.completed will toggle back and forth between the two options */}
                        {todo.completed ? "Done" : "Working on it"}</button>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

// export our code to App.js
export default Cards