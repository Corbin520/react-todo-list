import React from "react"

function Cards(props) {


    return (
        <div>
            {/* map() over the todos and display them to a card on the screen */}
            {props.todos.map(function(todo) {

                return(
                <div key={todo.id} className="card w-50">
                    <div className="card-body">
                        <h5 className="card-title">{todo.text}</h5>
                        <p className="card-text"></p>
                        <button onClick={() => props.setCompleted(todo.id)} className="btn btn-primary">{todo.completed ? "Working on it" : "Done"}</button>
                        {/* When clicked, change it to the opposite */}
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Cards