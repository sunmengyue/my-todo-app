import React from 'react';
import Nav from '../components/Nav';
import TodoList from '../components/TodoList';

const Completed = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <div className='container mt-5'>
      <h1>Completed</h1>
      <TodoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
    </div>
  );
};

export default Completed;
