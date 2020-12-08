import React, { useState } from 'react';

const Todo = ({ todo }) => {
  const [completeStatus, setCompleteStatus] = useState(false);
  function toggleStatus() {
    setCompleteStatus(!completeStatus);
  }
  return (
    <>
      <label className='list-group-item border-0'>
        <input
          className='form-check-input me-2'
          type='checkbox'
          value=''
          onChange={toggleStatus}
        />
        {todo.task}
      </label>
    </>
  );
};

export default Todo;
