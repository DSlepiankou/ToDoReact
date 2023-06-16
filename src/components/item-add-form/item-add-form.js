import React, { useState } from "react";
import './item-add-form.scss';
import { useDispatch } from "react-redux";
import { addElement } from "../../redux/todo-actions";

function ItemAddForm() {

    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    function onInputChange(e){
        setInput(e.target.value);
    }

    function onSubmit(e){
        e.preventDefault();
        addItem(input)
        setInput("");
    }

    function addItem(input){
        dispatch(addElement(input));
    };

    return (
        <form className="item-add-form"
            onSubmit={onSubmit}>
            <input type="text"
                className="form-control"
                placeholder="Type here what you want todo"
                onChange={onInputChange}
                value={input}>
            </input>
        </form>
    )
}

export default ItemAddForm;
