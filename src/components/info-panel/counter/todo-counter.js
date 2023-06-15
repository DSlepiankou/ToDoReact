import React from "react";
import "./todo-counter.css"
import { useSelector } from "react-redux";


function ToDoCounter() {

    const state = useSelector((state) => state.toDoList);
    
    const count = state.elements.filter((el) => !el.completed).length;

    return (
        <div className="counter">
            {count} more to do
        </div>
    )
}

export default ToDoCounter;