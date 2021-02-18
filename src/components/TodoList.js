import React, { Component } from 'react'
import TaskDataBaseProvider from '../Providers/TaskDataBaseProvider';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.taskProvider = new TaskDataBaseProvider();
        // this.categoryProvider = new TaskDataBaseProvider();
        this.state = {tasks: this.taskProvider.getTasks(), task: '' };
      }

      handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            task: this.state.task,
            id: Date.now()
        };
        this.taskProvider.saveTask(newTask);
        console.log(newTask)
        
        // if(new)
        this.setState(state => ({
            tasks: this.taskProvider.getTasks(),
            task: ''
        }));

    }

    taskChange = (e) => {
        this.setState({ task: e.target.value })
    }

    render() {
        // console.log(this.state.categories[0].id)
        return (
            <div>
                <div className="newTask">
                    <form onSubmit={this.handleSubmit} className="add-task">
                        <input onChange={this.taskChange} type="text" value={this.state.task} placeholder="Enter the task" />
                        <button type="submit"> + </button>
                    </form>
                </div>


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
