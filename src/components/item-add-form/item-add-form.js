import React, { useState } from "react";
import './item-add-form.css';

function ItemAddForm(props) {

    const [input, setInput] = useState("");

    function onInputChange(e){
        setInput(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        props.onItemAdded(input)
    }


    return (
        <form className="item-add-form"
            onSubmit={onSubmit}>
            <input type="text"
                className="form-control"
                placeholder="Type here what you want todo"
                onChange={onInputChange}
                value={input}
                ></input>
        </form>
    )
}

export default ItemAddForm;
