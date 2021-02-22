import React, { Component } from 'react'
import TaskDataBaseProvider from '../Providers/TaskDataBaseProvider';
import NavCategory from './NavCategory';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.taskProvider = new TaskDataBaseProvider();
        this.navCategory = new NavCategory();
        this.category = new TaskDataBaseProvider();
        this.state = { tasks: this.taskProvider.getTasks(), task: '' };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            task: this.state.task,
            id: this.props.catId
        };
        if (!newTask.id) {
            alert('choose category')
        } else {
            this.taskProvider.saveTask(newTask);
            this.setState(state => ({
                tasks: this.taskProvider.getTasks(),
                task: ''
            }))
        };
    }

    taskChange = (e) => {
        this.setState({ task: e.target.value })
    }

    deleteTask(task){
        this.taskProvider.deleteTask(task);
    }


    displayTasks = () => {
        const tasks = this.state.tasks.filter(task => task.id == this.props.catId)
        //     console.log(this.state.tasks.filter(task => task.id !== this.category.categories.map(el => el.id) ))
        // if(this.state.tasks.filter(task => task.id !== this.category.categories.map(el => el.id) ))
        // {
        // }
        return <div>
            {tasks.map(task =><ul> <li key={task.id}>{task.task + ' '}
            <button onClick={this.deleteTask.bind(this,task.task)}>Delete</button></li></ul>)}
        </div>
    }



    render() {
        return (
            <div>
                <div className="newTask">
                    <form onSubmit={this.handleSubmit} className="add-task">
                        <input onChange={this.taskChange} type="text" value={this.state.task} placeholder="Enter the task" />
                        <button type="submit"> + </button>
                    </form>
                    {this.displayTasks()}
                </div>
            </div>
        )
    }
}
