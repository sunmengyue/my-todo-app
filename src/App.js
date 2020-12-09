import React, { useState } from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Nav from './components/Nav';

const App = () => {
  //   let todos = [
  //     {id: 1, task: 'walk my cat', completed: false },
  //     {id: 2, task: 'complete coding challenge', completed: false },
  //   ];
  const [todos, setTodos] = useState([]);
  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  function deleteTodo(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }

  function toggleTodo(id) {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });
    setTodos(updatedTodos);
  }

  return (
    <div className='container mt-5'>
      <Nav />
      <TodoForm todos={todos} addTodo={addTodo} />
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default App;
