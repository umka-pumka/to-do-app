import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../actions';

const TodoForm = () => {
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      dispatch(addTodo({
        id: Date.now(),
        text: inputValue,
        completed: false,
        important: false
      }));
      setInputValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;