import React, { useEffect } from "react";
import TodoList from "./ToDo/ToDo_list";
import Context from "./context";
import AddToDo from "./ToDo/AddToDo";
import Loader from "./Loader";
import Counter from "./ToDo/counter";


function App() {
  const [todos, setTodos] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(response => response.json())
    .then(todos => {
      setTimeout(() => {
        setTodos(todos.map(todo => ({ ...todo,active:true })));
        setLoading(false);
      }, 2000);
    });
  }, []);

  function toggleToDo(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
      }
      return todo;
      }))}
  function toggleToDoActive(id) {
    setTodos(
      todos.map(todo => {
        if (todo.id === id) {
          todo.active = !todo.active;
      }
      return todo;
      }))}

  function removeTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  function addToDo(title) {
    setTodos(todos.concat([{
      title: title,
      id: Date.now(),
      completed: false,
      active: true
    }]));
  }

  return (
    <Context.Provider value={{ removeTodo }}>
      <div className="wrapper">
        <h1 className="title">to do list ({todos.length})</h1>

        <AddToDo onCreate={addToDo} />

        <Counter todos={todos} className= "counter" />

        {loading && <Loader />}
        {todos.length ? (
        <TodoList todos={todos} onToggle={toggleToDo} toggleToDoActive={toggleToDoActive} />
         ) : loading ? null : (
          <p>No todos</p>
         )}
      </div>
    </Context.Provider>
  );
}

export default App;