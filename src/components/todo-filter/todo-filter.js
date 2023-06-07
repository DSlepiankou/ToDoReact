import React from "react";     

function ToDoFilter(props){
    
    const buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
      ]

      const buttonsForRender = buttons.map(({ name, label }) => {
        const isActive = props.filter === name;
        const buttonsClass = isActive ? 'btn-info' : 'btn-outline-secondary'
        return (
          <button type="button"
            className={`btn ${buttonsClass}`}
            key={name}
            //onClick={() => props.onFilterChange(name)}
            >{label}</button>
        );
      });

    return(
        <div className="btn-group filter">
            {buttonsForRender}
        </div>
    );
}

export default ToDoFilter;