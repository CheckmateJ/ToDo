import _, { countBy } from 'lodash';
import React, { Component, useState } from 'react'
import TaskDataBaseProvider from '../Providers/TaskDataBaseProvider';
import NavCategory from './NavCategory';


export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.taskProvider = new TaskDataBaseProvider();
        this.navCategory = new NavCategory();
        this.state = { tasks: this.taskProvider.getTasks(), task: '', check: this.taskProvider.setUpdateTask() };

    }


    handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            task: this.state.task,
            id: this.props.catId,
            checkId: Date.now(),
            check: false
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

    deleteTask(task) {
        this.taskProvider.deleteTask(task);
    }

    // updating task and marking done task
    setUpdateTask = (text, id, checkBoxId) => {
        this.taskProvider.setUpdateTask(text, id, checkBoxId);
    }

    displayTasks = () => {
        const tasks = this.state.tasks.filter(task => task.id == this.props.catId)
        return <div className="tasksList">
            {tasks.map(task => <ul> <li key={task.id}>
                <input type="text" id={task.id} defaultValue={task.task} onChange={(e) => { this.setUpdateTask(e.target.value, task.checkId) }} />
                <input type="checkbox" id={task.checkId} checked={task.check} onChange={(check) => { this.setUpdateTask(check.target.checked, task.id, task.checkId) }} />
                <button onClick={this.deleteTask.bind(this, task.task)}>Delete</button></li></ul>)}
        </div>
    }


    render() {
        console.log(this.state.check)
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



