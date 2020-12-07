import React from 'react';
import TodoList from './TodoList';

const App = () => {
  let todos = [
    { task: 'walk my cat', completed: false },
    { task: 'complete coding challenge', completed: false },
  ];
  return (
    <div className='container'>
      <TodoList todos={todos} />
    </div>
  );
};

export default App;
