import React from 'react';
import Todo from './Todo';
import '../styles/TodoList.css';

const TodoList = ({ deleteTodo, toggleTodo, editTodo, filteredTodos }) => {
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
    <>
      <div className='list-group mt-3'>{todoItems}</div>
      {window.location.pathname === '/completed' ? (
        <div className='d-flex'>
          <button type='button' className='btn btn-danger mt-5 ms-auto'>
            Delete All
          </button>
        </div>
      ) : (
        ''
      )}
    </>
  );
};

export default TodoList;
