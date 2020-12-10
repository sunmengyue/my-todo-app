import React, { useState } from 'react';
import TodoEditForm from './TodoEditForm';
import '../styles/Todo.css';

const Todo = ({ todo, deleteTodo, id, toggleTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditingStatus = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className='d-flex flex-row align-items-center'>
      {isEditing ? (
        <TodoEditForm
          todo={todo}
          editTodo={editTodo}
          toggle={toggleEditingStatus}
        />
      ) : (
        <>
          <label className='list-group-item border-0 me-auto'>
            <input
              className='form-check-input me-2'
              type='checkbox'
              value=''
              checked={todo.completed}
              onChange={() => toggleTodo(id)}
            />
            <span className={`${todo.completed ? 'strikethrough' : ''}`}>
              {todo.task}
            </span>
          </label>
          <i
            className='material-icons md-36 md-dark me-5'
            onClick={toggleEditingStatus}
          >
            edit
          </i>
          <i
            className='material-icons md-36 md-dark'
            onClick={() => deleteTodo(id)}
          >
            delete
          </i>
        </>
      )}
    </div>
  );
};

export default Todo;
