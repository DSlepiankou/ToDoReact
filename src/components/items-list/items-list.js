import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import "./items-list.css"

function ItemsList(props){

    const elements = props.todos.map((item) => {
        const { id, ...itemProps } = item;
        return (
            <li key={item.id} className="list-group-item">
                <TodoListItem
                    {...itemProps}
                    checked = {item.isDone}
                    onDeleted={() => props.onDeleted(item.id)}
                    onToggleDone={() => props.onToggleDone(item.id)}
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {elements}
        </ul>
    );
}

export default ItemsList;