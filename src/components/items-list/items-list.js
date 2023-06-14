import React from "react";
import TodoListItem from "../todo-list-item/todo-list-item";
import "./items-list.css"
import { useSelector, useDispatch } from "react-redux";
import { deleteElement, checkCompleted } from "../../redux/todo-actions";


function ItemsList(props){

    const state = useSelector((state) => state.toDoList);
    const filter = useSelector((state) => state.toDoList.filter);
    const dispatch = useDispatch();

    function filterElements(state, filter){
        switch(filter){
            case "active":
                return state.filter((el) => !el.completed)
            case "completed":
                return state.filter((el) => el.completed)
            default:
                return state;
        }
    }

    function deleteItem(id){
        dispatch(deleteElement(id));
    };

    function checkCompletedItem(id){
        dispatch(checkCompleted(id))
    };

    const filteredElements = filterElements(state, filter);

    const items = filteredElements.elements.map((el) => {
        const {id, ...elProps} = el;
        return (
            <li key={el.id} className="list-group-item">
                <TodoListItem
                    {...elProps}
                    checked = {el.isDone}
                    onDeleted={() => deleteItem(el.id)}
                    onToggleDone={() => checkCompletedItem(el.id)}
                />
            </li>
        );
    });

    return (
        <ul className="list-group todo-list">
            {items}
        </ul>
    );
}

export default ItemsList;