import React, { Component } from 'react';

class ToDoCards extends Component{
  render(){
    let cardscompleted = this.props.todos.map(x => {
      if(x.completed == true){
        return(
          <li> Completed: {x.value}</li>
        );
      }
    })

    let cards = this.props.todos.map(x => {
      if(x.completed == false){
        return(
          <li>{x.value}</li>
        );
      }
      if(x.completed == true){
        return(
          <li>Completed: {x.value}</li>
        );
      }
    })
    return(
      <ul>
      {cards}
      </ul>
    );
  }
}

export default ToDoCards;
