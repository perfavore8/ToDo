import React, { useContext } from "react";
import PropTypes from 'prop-types';
import Context from "../context";

const styles ={
    li: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'space-between',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '4px',
        marginBottom: '.5rem'
    },
    input:{
        marginRight: '1rem'
    }
};

function ToDoItem({ todo, index, onChange, activeToggle }) {
    const { removeTodo } = useContext(Context);
    const classes = [];

    if (todo.completed) {
        classes.push('done');
    }
    if (!todo.active) {
        classes.push('unActive');
    }

    return <li style={styles.li} >
        <input 
          type='checkbox' 
          checked={todo.completed}
          style={styles.input} 
          onChange={() => todo.active === true && onChange(todo.id)} />
      <span className={"home-title"} onClick={() => {
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