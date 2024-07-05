export const addTodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
  });
  
  export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    payload: id
  });
  
  export const markImportant = (id) => ({
    type: 'MARK_IMPORTANT',
    payload: id
  });
  
  export const deleteTodo = (id) => ({
    type: 'DELETE_TODO',
    payload: id
  });
  
  export const setFilter = (filter) => ({
    type: 'SET_FILTER',
    payload: filter
  });