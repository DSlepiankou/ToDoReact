import React from "react";
import Header from "../header/header";
import ItemAddForm from "../item-add-form/item-add-form";
import ItemsList from "../items-list/items-list";
import ToDoCounter from "../info-panel/counter/todo-counter";
import ToDoFilter from "../info-panel/filtering/todo-filter";
import InfoPanel from "../info-panel/info-panel";
import './app.css'

function App() {

    return (
        <div className="app">
            <div className="to-do-list">
                <Header />
                <ItemAddForm />
                <ItemsList />
                <InfoPanel />
            </div>
        </div>
    )
}

export default App;
