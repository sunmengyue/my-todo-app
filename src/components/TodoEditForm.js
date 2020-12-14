import React, { useState } from 'react';
import '../styles/TodoEditForm.css';

const TodoEditForm = ({ todo, editTodo, toggle }) => {
  const [value, setValue] = useState(todo.task);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  const handleInputSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, value);
    setValue('');
    toggle();
  };
  return (
    <form onSubmit={handleInputSubmit} className='edit-form'>
      <input
        type='text'
        className='form-control form-control-lg fs-4 shadow-none'
        value={value}
        onChange={handleChange}
        autoFocus
      ></input>
    </form>
  );
};

export default TodoEditForm;
