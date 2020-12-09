import React from 'react';
import Nav from '../components/Nav';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const Active = ({ todos, addTodo, toggleTodo }) => {
  return (
    <div className='container mt-5'>
      <Nav />
      <TodoForm todos={todos} addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </div>
  );
};
