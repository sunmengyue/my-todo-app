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
    <form id='todo-form' onSubmit={handleSubmit}>
      <input
        placeholder='add todos'
        type='text'
        value={value}
        onChange={handleChange}
        id='task-input'
      />
      <button type='submit'>Add</button>
    </form>
  );
};

export default TodoForm;
