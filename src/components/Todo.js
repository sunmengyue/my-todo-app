import React, { useState } from 'react';
import TodoEditForm from './TodoEditForm';
import '../styles/Todo.css';

const Todo = ({ todo, deleteTodo, id, toggleTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const toggleEditingStatus = () => {
    setIsEditing(!isEditing);
  };

  const closeEdit = () => {
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <TodoEditForm
          todo={todo}
          editTodo={editTodo}
          toggle={toggleEditingStatus}
          closeEdit={closeEdit}
        />
      ) : (
        <div className='list-group-item'>
          <label className='todo-task'>
            <input
              type='checkbox'
              value=''
              checked={todo.completed}
              onChange={() => toggleTodo(id)}
            />
            <span className={todo.completed ? 'strike-through' : ''}>
              {todo.task}
            </span>
          </label>
          <div className='icons'>
            {window.location.pathname === '/completed' ? (
              ''
            ) : (
              <i
                className='edit material-icons md-24 md-dark'
                onClick={toggleEditingStatus}
              >
                edit
              </i>
            )}

            <i
              className='delete material-icons md-24 md-dark'
              onClick={() => deleteTodo(id)}
            >
              delete
            </i>
          </div>
        </div>
      )}
    </div>
  );
};

export default Todo;
