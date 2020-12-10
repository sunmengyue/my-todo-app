import React from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import Nav from '../components/Nav';

const All = ({ todos, addTodo, deleteTodo, toggleTodo, editTodo }) => {
  return (
    <div className='container mt-5'>
      <h1>All</h1>
      <TodoForm todos={todos} addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
      />
    </div>
  );
};

export default All;
