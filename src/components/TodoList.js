import React, { useState } from 'react';
import Todo from './Todo';

const TodoList = ({ todos, deleteTodo, toggleTodo }) => {
  const todoItems = todos.map((todo) => {
    return (
      <Todo
        todo={todo}
        key={todo.id}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        id={todo.id}
      />
    );
  });
  return <div className='list-group mt-3'>{todoItems}</div>;
};

export default TodoList;
