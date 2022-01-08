import React from 'react'

function Counter({todos}) {
    const activeTodos = todos.filter( todo => todo.active );
    const completedTodos = todos.filter( todo => todo.completed );
    return (
        <>
        <span>Active: {activeTodos.length} </span>
        <span>Completed: {completedTodos.length}</span>
        </>
    )
}

export default Counter
