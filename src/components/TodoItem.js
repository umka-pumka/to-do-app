import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTodo, markImportant, deleteTodo } from '../actions';

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo(todo.id));
  };

  const handleMarkImportant = () => {
    dispatch(markImportant(todo.id));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div>
      <span style={{ marginRight: '10px', textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span>
      <input type="checkbox" checked={todo.completed} onChange={handleToggle} />
      <button onClick={handleMarkImportant} style={{ marginLeft: '10px', fontWeight: todo.important ? 'bold' : 'normal' }}>Important</button>
      <button onClick={handleDelete} style={{ marginLeft: '10px' }}>Delete</button>
    </div>
  );
};

export default TodoItem;