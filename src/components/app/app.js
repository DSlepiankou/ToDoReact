import React, {useState} from "react";
import Header from "../header/header";
import './app.css'
import ItemAddForm from "../item-add-form/item-add-form";
import { v4 as uuidv4 } from "uuid";
import ItemsList from "../items-list/items-list";

function App() {

    const[items, setItems] = useState([])

    function addItem(text){
        const newItem = {
            label: text,
            done:false,
            id:uuidv4()
        }

        const newEls = [...items, newItem];
        setItems(newEls);
    }

    function deleteItem(id){
        const els = items.filter((el) => el.id !== id);

        setItems(els);
    }

    return (
        <div className="app">
            <div className="to-do-list">
                <Header />
                <ItemAddForm 
                onItemAdded={(text) => addItem(text)}/>
                <ItemsList todos={items}
                onDeleted={(id) => deleteItem(id)}/>
            </div>
        </div>
    )
}

export default App;
