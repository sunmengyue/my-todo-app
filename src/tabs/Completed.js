import React from 'react';
import Nav from '../components/Nav';
import TodoList from '../components/TodoList';

const Completed = ({ todos, deleteTodo, toggleTodo, filteredTodos }) => {
  return (
    <div className='container mt-5'>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default Completed;
