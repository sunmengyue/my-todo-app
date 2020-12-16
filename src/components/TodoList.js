import React, { useState } from 'react';
import Todo from './Todo';
import '../styles/TodoList.css';
import Modal from './UI/Modal';

const TodoList = ({ deleteTodo, toggleTodo, editTodo, filteredTodos }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const todoItems = filteredTodos.map((todo) => {
    return (
      <Todo
        todo={todo}
        key={todo.id}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        id={todo.id}
        editTodo={editTodo}
      />
    );
  });
  return (
    <div>
      <Modal show={show}>
        <p>
          <i className='material-icons md-48 danger'>priority_high</i>Are you
          sure you want to delete all tasks
        </p>
        <div className='float-end'>
          <button type='button' className='cancleButton' onClick={handleClose}>
            No
          </button>
          <button type='button' className='confirmButton'>
            Yes
          </button>
        </div>
      </Modal>

      <div className='list-group mt-5'>{todoItems}</div>
      {window.location.pathname === '/completed' ? (
        <div className='d-flex'>
          <button
            type='button'
            className='btn btn-danger mt-5 ms-auto'
            onClick={handleShow}
          >
            Delete All
          </button>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default TodoList;
