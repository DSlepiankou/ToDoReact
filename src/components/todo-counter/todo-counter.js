import React from "react";

function ToDoCounter(props) {
    console.log(props.items)
    return (
        <div className="counter">
            {props.items} more to do
        </div>
    )
}

export default ToDoCounter;