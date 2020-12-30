import React from 'react';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';

const All = ({
  todos,
  addTodo,
  deleteTodo,
  toggleTodo,
  editTodo,
  filteredTodos,
}) => {
  return (
    <div className='container'>
      <TodoForm todos={todos} addTodo={addTodo} />
      <TodoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleTodo={toggleTodo}
        editTodo={editTodo}
        filteredTodos={filteredTodos}
      />
    </div>
  );
};

export default All;
