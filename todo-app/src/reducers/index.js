import { ADD, REMOVE } from "../actions";

// initialize default state
const initialState = {
  todos: []
};

// create reducer function

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return Object.assign({}, state, state.todos = state.todos.concat([{
        value: action.value,
        completed: false
      }]));
    case REMOVE:
      let objIndex = state.todos.findIndex((obj => obj.value == action.value));
      let newArray = state.todos;
      newArray[objIndex].completed = true;
      console.log(newArray[objIndex].value);
      return Object.assign({}, state, state.todos = newArray);
    default:
      return state;
  }
};
