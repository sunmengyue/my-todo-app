import React, { useState } from 'react';
import useClickOutside from './util/useClickOutside';
import '../styles/TodoEditForm.css';

const TodoEditForm = ({ todo, editTodo, toggle, closeEdit }) => {
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

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleInputSubmit(e);
    }
  };

  const domNode = useClickOutside(() => {
    closeEdit();
  });

  return (
    <form ref={domNode} onSubmit={handleInputSubmit} className='edit-form'>
      <input
        className='form-control'
        type='text'
        value={value}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        autoFocus
      ></input>
      <div className='btn'>
        <button className='btn btn-cancel' onClick={closeEdit}>
          Cancel
        </button>
        <button type='submit' className='btn btn-save'>
          Save
        </button>
      </div>
    </form>
  );
};

export default TodoEditForm;
