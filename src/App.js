import React, { useState, useEffect } from 'react';
import Nav from './components/Nav';
import Active from './tabs/Active';
import Completed from './tabs/Completed';
import Route from './components/Route';
import All from './tabs/All';
import './styles/App.css';

const App = () => {
  const initialTodos = JSON.parse(localStorage.getItem('todos')) || [];

  const [todos, setTodos] = useState(initialTodos);
  const [status, setStatus] = useState('All');
  const [filteredTodos, setFilteredTodos] = useState([]);

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

  const filterHandler = () => {
    switch (status) {
      case 'Active':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      case 'Completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const deleteAll = () => {
    setTodos([]);
  };

  useEffect(() => {
    filterHandler();
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos, status]);

  return (
    <div className='container mt-5'>
      <h1 className='text-center mb-5' id='title'>
        Task Slayer
      </h1>
      <Nav setStatus={setStatus} />
      <Route path='/'>
        <All
          todos={todos}
          addTodo={addTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          filteredTodos={filteredTodos}
        />
      </Route>
      <Route path='/active'>
        <Active
          todos={todos}
          addTodo={addTodo}
          toggleTodo={toggleTodo}
          deleteTodo={deleteTodo}
          editTodo={editTodo}
          filteredTodos={filteredTodos}
        />
      </Route>
      <Route path='/completed'>
        <Completed
          todos={todos}
          deleteTodo={deleteTodo}
          toggleTodo={toggleTodo}
          filteredTodos={filteredTodos}
          deleteAll={deleteAll}
        />
      </Route>
    </div>
  );
};

export default App;
