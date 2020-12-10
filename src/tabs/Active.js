import React from 'react';
import Nav from '../components/Nav';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const Active = ({ todos, addTodo, toggleTodo, deleteTodo, editTodo }) => {
  return (
    <div className='container mt-5'>
      <h1>Active</h1>
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

export default Active;
