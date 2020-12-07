import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TodoList = (props) => {
  const todoItems = props.todos.map((todo) => {
    return (
      <label className='list-group-item border-0' key={uuidv4()}>
        <input className='form-check-input me-2' type='checkbox' value='' />
        {todo.task}
      </label>
    );
  });
  return (
    <div className='container mt-5'>
      <form className='d-flex'>
        <input
          placeholder='add todo details'
          type='text'
          className='form-control me-2 fs-4'
        ></input>
        <button type='submit' className='btn btn-primary fs-4'>
          Add
        </button>
      </form>
      <div className='list-group mt-3'>{todoItems}</div>
    </div>
  );
};

export default TodoList;
