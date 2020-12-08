import React, { useState } from 'react';

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  function handleChange(e) {
    setValue(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    // add one new todo Item on todolist
    addTodo({ task: value, completed: false });

    //save to local storage
  }
  return (
    <form className='d-flex mt-5' onSubmit={handleSubmit}>
      <input
        placeholder='add todo details'
        type='text'
        className='form-control me-2 fs-4'
        value={value}
        onChange={handleChange}
      />
      <button type='submit' className='btn btn-primary fs-4'>
        Add
      </button>
    </form>
  );
};

export default TodoForm;
