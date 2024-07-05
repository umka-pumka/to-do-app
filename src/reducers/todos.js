const initialState = {
    todos: [],
    filter: 'all'  // Фильтр по умолчанию
  };
  
  const todosReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TODO':
        return {
          ...state,
          todos: [...state.todos, action.payload]
        };
  
      case 'TOGGLE_TODO':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo
          )
        };
  
      case 'MARK_IMPORTANT':
        return {
          ...state,
          todos: state.todos.map(todo =>
            todo.id === action.payload ? { ...todo, important: !todo.important } : todo
          )
        };
  
      case 'DELETE_TODO':
        return {
          ...state,
          todos: state.todos.filter(todo => todo.id !== action.payload)
        };
  
      case 'SET_FILTER':
        return {
          ...state,
          filter: action.payload
        };
  
      default:
        return state;
    }
  };
  
  export default todosReducer;