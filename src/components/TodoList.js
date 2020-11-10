import React, { Component } from 'react'


class TodoList extends Component {

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  render() {
    let todo = [];
    if(this.props.tasks.map(task => (task.date === Date.now()))){

      todo.push(this.props.tasks.map(task => (task.text)))

    }
      

    return (
      <div>
        <ul>
            {this.props.groupTasks.map(task => (
              <li key={task.id}>
               {task.category}
              <input type="text" id={task.id} value={task.text} onChange={(e) => { this.props.setUpdate(e.target.value, task.id) }} />
              {task.date}
              <button onClick={this.handleDelete.bind(this, task)}>Delete</button>
              </li>
            ))}

          </ul>
      </div>
    )
  }
}

export default TodoList;