import React, { useState } from 'react';
import Todo from './Todo';
import '../styles/TodoList.css';
import Modal from './UI/Modal';

const TodoList = ({
  deleteTodo,
  toggleTodo,
  editTodo,
  filteredTodos,
  deleteAll,
}) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const confirmDelete = () => {
    deleteAll();
    handleClose();
  };

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
      <Modal show={show} handleClose={handleClose}>
        <p>
          <i className='material-icons md-48 danger'>priority_high</i>Are you
          sure you want to delete all tasks
        </p>
        <div>
          <button className='btn btn-cancle' onClick={handleClose}>
            No
          </button>
          <button className='btn btn-confirm' onClick={confirmDelete}>
            Yes
          </button>
        </div>
      </Modal>

      <div className='todo-list'>{todoItems}</div>
      {window.location.pathname === '/completed' ? (
        <button id='deleteAllButton' type='button' onClick={handleShow}>
          Delete All
        </button>
      ) : (
        ''
      )}
    </div>
  );
};

export default TodoList;
