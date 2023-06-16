import React from "react";
import ToDoCounter from "./counter/todo-counter";
import ToDoFilter from "./filtering/todo-filter";
import DelButton from "./delete-completed/delete-completed"
import './info-panel.scss'

function InfoPanel() {

    return (
        <span className="item-status-panel">
            <ToDoCounter />
            <ToDoFilter />
            <DelButton />
        </span>
    );
};

export default InfoPanel;