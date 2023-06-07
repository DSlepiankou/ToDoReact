import React from "react";

function ToDoCounter(props){

    const items = props.items.length;
    return(
        <div className="counter">
            <h2>{items} more to do</h2>
        </div>
    )
}

export default ToDoCounter;