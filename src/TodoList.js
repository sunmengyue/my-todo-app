import React, { useState } from 'react';
import Todo from './Todo';
import { v4 as uuidv4 } from 'uuid';

const TodoList = ({ todos }) => {
  const todoItems = todos.map((todo) => {
    return <Todo todo={todo} key={uuidv4()} />;
  });
  return <div className='list-group mt-3'>{todoItems}</div>;
};

export default TodoList;
