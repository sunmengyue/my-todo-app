import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Active from './tabs/Active';
import Completed from './tabs/Completed';
import Route from './components/Route';
import All from './tabs/All';

const App = () => {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];

  const [todos, setTodos] = useState(initialTodos);
  const addTodo = (newTodo) => {
    if (newTodo.task) {
      setTodos([...todos, newTodo]);
    } else {
      alert('please provide a task :)');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, completed: !todo.completed } : todo;
    });

    setTodos(updatedTodos);
  };

  const editTodo = (id, newTask) => {
    const updateTodos = todos.map((todo) => {
      return todo.id === id ? { ...todo, task: newTask } : todo;
    });
    setTodos(updateTodos);
  };

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <div className='container mt-5'>
      <Nav />
      <Route path='/'>
        <All
          todos={todos}
          addTodo={addTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      </Route>
      <Route path='/active'>
        <Active
          todos={todos}
          addTodo={addTodo}
          toggleTodo={toggleTodo}
          editTodo={editTodo}
        />
      </Route>
      <Route path='/completed'>
        <Completed
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
        />
      </Route>
    </div>
  );
};

export default App;
