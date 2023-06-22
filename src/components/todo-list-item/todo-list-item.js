import React  from "react";
import "./todo-list-item.scss"

function TodoListItem(props) {
    return (
        <span className="todo-list-item">
            <div>
                <input type="checkbox" className="checkbox-circle"  onChange={props.onToggleDone} checked={props.checked}/>
                {props.content}
            </div>
            <button type="button"
                className="float-right delete-btn"
                role="deletion-button"
                onClick={props.onDeleted}>
                <i className="bi bi-trash"></i>
            </button>
        </span>
    );
}

export default TodoListItem;