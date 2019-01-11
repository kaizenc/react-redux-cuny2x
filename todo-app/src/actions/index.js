// Namespace Actions aka Action Types

export const ADD = "ADD";
export const REMOVE = "REMOVE";


// Action creators

export const AddToDo = (value = "") => {
  return {
    type: ADD,
    value: value // basically value: value
  }
}

export const RemoveToDo = (value = "") => {
  return {
    type: REMOVE,
    value: value
  }
}
