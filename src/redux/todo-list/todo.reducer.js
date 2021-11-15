const INITIAL_STATE = {
  todoList: [{ input: "input", done: false, id: Date.now() }],
};

const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SAVE_TODO":
      return {
        ...state,
        todoList: state.todoList.append(action.payload),
      };
    default:
      return state;
  }
};

export default todoReducer;
