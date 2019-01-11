import React, { Component } from 'react';
import ToDoCards from './ToDoCards';

class ToDo extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: "",
      removeValue: "",
      viewCompleted: false,
    }
  }

  handleChange = (event) =>{
    this.setState({
      value: event.target.value,
    });
  }
  handleChangeRemove = (event) =>{
    this.setState({
      removeValue: event.target.value,
    });
  }
  viewCompleted = () => {
    this.setState({
      viewCompleted: true
    });
  }

  render(){
    return(
      <div>
        Add Task Name: <input type='text' name='newTask' onChange={this.handleChange}></input><br/>
        <button onClick={() => this.props.addNewToDo(this.state.value)}>Add</button><br/>
        Remove Task Name: <input type='text' name='removeTask' onChange={this.handleChangeRemove}></input><br/>
        <button onClick={() => this.props.removeToDo(this.state.removeValue)}>Remove</button><br/>
        <button onClick={() => this.viewCompleted}>View Completed</button>
        <ToDoCards todos={this.props.todos} viewCompleted={this.state.viewCompleted}/>
      </div>
    );
  }
}

export default ToDo;
