import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../styles/TodoForm.css';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    addTodo({ id: uuidv4(), task: value, completed: false });
    setValue('');
  }
  return (
    <form className='d-flex mt-5' onSubmit={handleSubmit}>
      <input
        placeholder='add todo details'
        type='text'
        className='form-control me-5 fs-4'
        value={value}
        onChange={handleChange}
        id='task-input'
      />
      <button
        type='submit'
        className='btn btn-primary fs-4'
        id='task-add-button'
      >
        Add
      </button>
    </form>
  );
};

export default TodoForm;
