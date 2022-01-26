import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Context from "../context";
import './index.css';

function ToDoItem({ todo, index, onChange, activeToggle }) {
    const { removeTodo } = useContext(Context);
    const classes = [];

    if (todo.completed) {
        classes.push('done');
    }
    if (!todo.active) {
        classes.push('unActive');
    }

    return <li className="li" >
        <input 
            type='checkbox' 
            id={todo.id}
            checked={todo.completed}
            className="custom-checkbox"
            onChange={() => todo.active === true && onChange(todo.id)} />
        <label htmlFor={todo.id} />
      <span 
      {...todo.active ? className="container" : className="containerUnactive"}
       onClick={() => {
        todo.completed !== true && activeToggle(todo.id)
        onChange(false);
    }}>
          <strong>{index + 1}</strong>
          &nbsp;
          {todo.title}
      </span>


      <button className="rm" onClick={() => removeTodo(todo.id)}></button>
      </li>;
}

ToDoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    onChange: PropTypes.func.isRequired,
}

export default ToDoItem