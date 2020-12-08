import React, { useState } from 'react';
import './styles/Todo.css';

const Todo = ({ todo, deleteTodo, id, toggleTodo }) => {
  return (
    <div className='d-flex flex-row align-items-center justify-content-between'>
      <label className='list-group-item border-0'>
        <input
          className='form-check-input me-2'
          type='checkbox'
          value=''
          onChange={() => toggleTodo(id)}
        />
        <span className='strikethrough'>{todo.task}</span>
      </label>
      <i
        className='material-icons md-36 md-dark'
        onClick={() => deleteTodo(id)}
      >
        delete_outline
      </i>
    </div>
  );
};

export default Todo;
