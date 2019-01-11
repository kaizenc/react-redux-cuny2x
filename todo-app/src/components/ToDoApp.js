import { connect } from "react-redux";
import ToDo from './ToDo';
import { ADD, REMOVE , AddToDo } from "../actions";

const mapStateToProps = (state, ownProps) => {
  return {
    value: state.value
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return{
    addNewToDo: (value) => {
      console.log(value);
      dispatch(AddToDo(value));
    },
  };
}

const ToDoApp = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToDo);

export default ToDoApp;
