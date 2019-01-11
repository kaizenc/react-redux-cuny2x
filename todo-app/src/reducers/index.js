import { ADD, REMOVE } from "../actions";

// initialize default state
const initialState = {
  todos: []
};

// create reducer function

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, state.todos = state.todos.concat([action.value]))
    case REMOVE:
      return Object.assign({}, state, state.value--)
    default:
      return state;
  }
};
