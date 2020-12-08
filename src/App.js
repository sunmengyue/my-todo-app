import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const App = () => {
  //   let todos = [
  //     {id: 1, task: 'walk my cat', completed: false },
  //     {id: 2, task: 'complete coding challenge', completed: false },
  //   ];
  const [todos, setTodos] = useState([]);
  function addTodo(newTodo) {
    setTodos([...todos, newTodo]);
  }

  return (
    <div className='container'>
      <TodoForm todos={todos} addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
