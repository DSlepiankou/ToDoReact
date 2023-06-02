import React from "react";
import Header from "../header/header";
import './app.css'
import ItemAddForm from "../item-add-form/item-add-form";

function App() {
    return (
        <div className="app">
            <div className="to-do-list">
            <Header />
            <ItemAddForm />
            </div>
        </div>
    )
}

export default App;
