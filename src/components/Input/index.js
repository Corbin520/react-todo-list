
// this page is responsible for the input functionality 

import React, { useState } from "react"

function Input(props) {

    // hook we are using to update the [value]
    const [value, setValue] = useState("")

    // this is getting the value from the input box
    function handleChange(event) {
        setValue(event.target.value)
    }
    
    // this handles the add button
    function handleFormSubmit(event) {
        event.preventDefault();
        props.addToDo(value)
    }
    
    // returning our input information
    return(
        <div>
            <form onSubmit={handleFormSubmit}>
                <input type="text" placeholder="Add your To Do Items" onChange={handleChange} value={value} />
                <button>Add</button>
            </form>
        </div>
    )
}
// Exporting. Then will be called in App.js
export default Input