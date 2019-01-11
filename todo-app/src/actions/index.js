// Namespace Actions aka Action Types

export const ADD = "ADD";
export const REMOVE = "REMOVE";


// Action creators

export const AddToDo = (value = "") => {
  return {
    type: ADD,
    value // basically value: value
  }
}

export const RemoveToDo = (value = 0) => {
  return {
    type: REMOVE
    value
  }
}
