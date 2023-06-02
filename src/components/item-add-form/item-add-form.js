import React from "react";
import './item-add-form.css';

function ItemAddForm() {
    return (
        <form className="item-add-form">
            <input type="text"
                className="form-control"
                placeholder="Type here what you want todo"></input>
        </form>
    )
}

export default ItemAddForm;
