import React from "react";
import "./todo-list-item.css"

function TodoListItem(props) {

    const {
        onDeleted
    } = props;

    return (
        <span className="todo-list-item">
            <div className="todo-text">
                <input type="checkbox" className="checkbox-circle" />
                {props.label}
            </div>
            <button type="button"
                className="float-right delete-btn"
                onClick={onDeleted}>
                <i className="bi bi-trash"></i>
            </button>
        </span>
    );
}

export default TodoListItem;