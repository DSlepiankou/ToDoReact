import React from "react";
import "./todo-counter.css"

function ToDoCounter(props) {
    return (
        <div className="counter">
            {props.items} more to do
        </div>
    )
}

export default ToDoCounter;