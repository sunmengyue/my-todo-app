import React, { useState } from 'react';

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
    <form onSubmit={handleInputSubmit}>
      <input
        type='text'
        className='form-control form-control-lg'
        value={value}
        onChange={handleChange}
        autoFocus
      ></input>
    </form>
  );
};

export default TodoEditForm;
