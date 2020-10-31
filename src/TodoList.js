import React, { Component } from 'react'


class TodoList extends Component{

    handleDelete(id){
      this.props.handleDelete(id);
    }
  
    render(){
      return (
        <div className="Todo-list">
        <ol>
          {this.props.tasks.map(task => (
            <li className="tasks" key={task.id}>
            <input type="text" id={task.id} value={task.text} onChange={(e) => { this.props.setUpdate(e.target.value, task.id)}}/> 
            <button class="delete-item" onClick={this.handleDelete.bind(this,task)}>Delete</button>
            </li>
          ))}
        </ol>
        </div>
      )
    }
  }

  export default TodoList;