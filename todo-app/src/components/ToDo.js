import React, { Component } from 'react';

class ToDo extends Component{
  constructor(props){
    super(props);
    this.state = {
      value: "",
    }
  }

  handleChange = (event) =>{
    this.setState({
      value: event.target.value,
    });
  }

  render(){
    return(
      <div>
        Add New Task: <input type='text' name='newTask' onChange={this.handleChange}></input><br/>
        <button onClick={() => this.props.addNewToDo(this.state.value)}>Add</button>
      </div>
    );
  }
}

export default ToDo;
