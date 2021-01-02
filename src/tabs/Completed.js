import React from 'react';
import TodoList from '../components/TodoList';

const Completed = ({
  todos,
  deleteTodo,
  toggleTodo,
  filteredTodos,
  deleteAllCompleted,
}) => {
  return (
    <div className='container'>
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        filteredTodos={filteredTodos}
        deleteAllCompleted={deleteAllCompleted}
      />
    </div>
  );
};

export default Completed;
