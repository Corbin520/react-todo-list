import React from "react"

function Cards(props) {

    // function that will be changing "completed"
    // function handleClick() {
    //     console.log("handling click")
    //     props.todo.completed : !props.todo.completed;
    // }

    return (
        <div>
            {/* map() over the todos and display them to a card on the screen */}
            {props.todos.map(function(todo) {

                return(
                <div key={todo.id} className="card w-50">
                    <div className="card-body">
                        <h5 className="card-title">{todo.text}</h5>
                        <p className="card-text"></p>
                        <a href="#" className="btn btn-primary">
                            
                        {/* When clicked, change it to the opposite */}
                        {todo.completed ? "Working on it" : "Done"}</a>
                    </div>
                </div>
                )
            })}
        </div>
    )
}

export default Cards