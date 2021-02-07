import React, { Component } from 'react'
import TaskDataBaseProvider from '../Providers/TaskDataBaseProvider';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        let taskProvider = new TaskDataBaseProvider();
        // this.state = {todos: taskProvider.getTasks()};
      }
    render() {
        return (
            <div>
            {/* <div className="btns">
                <ul>
                {this.state.todos.map(task => (
                   <li>
                       {task}
                   </li>
                ))}
                 </ul>
                </div> */}
            </div>
        )
    }
}
