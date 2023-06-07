import React, { useState } from "react";
import Header from "../header/header";
import './app.css'
import ItemAddForm from "../item-add-form/item-add-form";
import { v4 as uuidv4 } from "uuid";
import ItemsList from "../items-list/items-list";
import ToDoCounter from "../todo-counter/todo-counter";
import ToDoFilter from "../todo-filter/todo-filter";

function App() {

    const [items, setItems] = useState([])
    const [filterState, setFilter] = useState('all')

    function addItem(text) {
        const newItem = {
            label: text,
            isDone: false,
            id: uuidv4(),
        }

        const newEls = [...items, newItem];
        setItems(newEls);
    }

    function deleteItem(id) {
        const els = items.filter((el) => el.id !== id);

        setItems(els);
    }

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

    function markItemAsDone(id) {
        const idx = items.findIndex((el) => el.id === id);
        const oldItem =items[idx];
        const newItem = {...oldItem, isDone: !oldItem.isDone}
        const newItems = [...items.slice(0,idx),
        newItem,
        ...items.slice(idx+1)];
        
        setItems(newItems);
    }

    const visibleItems = filtering(items, filterState);


    const activeItems = items.filter((x) => x.isDone === false);
    const activeItemsCount = activeItems.length;

    return (
        <div className="app">
            <div className="to-do-list">
                <Header />
                <ItemAddForm
                    onItemAdded={(text) => addItem(text)} />
                <ItemsList
                    onDeleted={(id) => deleteItem(id)}
                    onToggleDone={(id) => markItemAsDone(id)}
                    todos={visibleItems}
                />
                <span className="item-status-panel">
                    <div>
                        <ToDoCounter items={activeItemsCount} />
                    </div>
                    <div>
                        <ToDoFilter
                            filterState={filterState}
                            onFilterChange={(stateName) => setFilter(stateName)} />
                    </div>
                </span>
            </div>
        </div>
    )
}

export default App;
