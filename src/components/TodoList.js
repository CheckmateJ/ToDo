import React, { Component } from 'react'
import TaskDataBaseProvider from '../Providers/TaskDataBaseProvider';
import NavCategory from './NavCategory';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.taskProvider = new TaskDataBaseProvider();
        this.navCategory = new NavCategory();
        this.state = { tasks: this.taskProvider.getTasks(), task: '' };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            task: this.state.task,
            id: this.props.catId
        };
        this.taskProvider.saveTask(newTask);
        this.setState(state => ({
            tasks: this.taskProvider.getTasks(),
            task: ''
        }));
    }

    taskChange = (e) => {
        this.setState({ task: e.target.value })
    }

    render() {
        console.log(this.props.catId)
        return (
            <div>
                <div className="newTask">
                    <form onSubmit={this.handleSubmit} className="add-task">
                        <input onChange={this.taskChange} type="text" value={this.state.task} placeholder="Enter the task" />
                        <button type="submit"> + </button>
                    </form>
                </div>
            </div>
        )
    }
}
