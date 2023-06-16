import React from "react";
import './todo-filter.scss';
import { changeFilter } from "../../../redux/todo-actions";
import { useSelector, useDispatch } from "react-redux";

function ToDoFilter() {

  const buttons = [
    { name: 'all', label: 'All' },
    { name: 'active', label: 'Active' },
    { name: 'done', label: 'Done' }
  ]

  const filter = useSelector((state) => state.toDoList.filtering);

  const dispatch = useDispatch();

  function changeFiltering(name){
    dispatch(changeFilter(name))
  }

  const buttonsForRender = buttons.map(({ name, label }) => {
    const isActive = filter === name;
    let buttonsClass = isActive ? 'active' : 'outline'

    return (
      <button type="button"
        className={`butn ${buttonsClass}`}
        key={name}
        onClick={() => changeFiltering(name)}
      >{label}</button>
    );
  });

  return (
    <div className="btn-group-filter">
      {buttonsForRender}
    </div>
  );
}

export default ToDoFilter;