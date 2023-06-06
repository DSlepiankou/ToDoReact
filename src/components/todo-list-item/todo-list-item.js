import React from "react";
import "./todo-list-item.css"

function TodoListItem(props){
    return (
        <span>
            <span
                className="todo-list-item">
                {props.label}
            </span>

            <button type="button"
                className="btn btn-outline-danger btn-sm float-right">
                <i className="fa fa-trash-o" />
            </button>
        </span>
    );
}

export default TodoListItem;