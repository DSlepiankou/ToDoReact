import React from "react";     
import './todo-filter.css';

function ToDoFilter(props){
    
    const buttons = [
        { name: 'all', label: 'All' },
        { name: 'active', label: 'Active' },
        { name: 'done', label: 'Done' }
      ]

      const buttonsForRender = buttons.map(({ name, label }) => {
        const isActive = props.filterState === name;
        let buttonsClass = isActive ? 'active' : 'outline'
        return (
          <button type="button"
            className={`butn ${buttonsClass}`}
            key={name}
            onClick={() => props.onFilterChange(name)}
            >{label}</button>
        );
      });

    return(
        <div className="btn-group-filter">
            {buttonsForRender}
            <button className="del-button"
                        >Delete completed</button>
        </div>
    );
}

export default ToDoFilter;