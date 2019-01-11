import { connect } from "react-redux";
import ToDo from './ToDo';
import { ADD, REMOVE , AddToDo , RemoveToDo} from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    addNewToDo: (value) => {
      dispatch(AddToDo(value));
    },
    removeToDo: (value) => {
      dispatch(RemoveToDo(value));
    },
  };
}

const ToDoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);

export default ToDoApp;
