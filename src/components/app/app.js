import React, { useState } from "react";
import Header from "../header/header";
import './app.css'
import ItemAddForm from "../item-add-form/item-add-form";
import ItemsList from "../items-list/items-list";
import ToDoCounter from "../todo-counter/todo-counter";
import ToDoFilter from "../todo-filter/todo-filter";

function App() {

    const [items, setItems] = useState([])
    const [filterState, setFilter] = useState('all')

    function filtering(items, filter) {
        switch (filter) {
            case 'active':
                return items.filter((item) => !item.isDone)
            case 'done':
                return items.filter((item) => item.isDone)
            default:
                return items;
        }
    }

    function deleteCompleted() {
        const newArr = items.filter((x)=>!x.isDone)
        setItems(newArr)
    }

    return (
        <div className="app">
            <div className="to-do-list">
                <Header />
                <ItemAddForm />
                <ItemsList
                />
                <span className="item-status-panel">
                    <ToDoCounter />
                    <ToDoFilter
                        filterState={filterState}
                        onFilterChange={(stateName) => setFilter(stateName)} />
                </span>
            </div>
        </div>
    )
}

export default App;
