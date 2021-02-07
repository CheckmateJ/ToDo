import { render } from "@testing-library/react";
import React, { Component } from 'react'


export default class TaskDataBaseProvider extends Component {
    constructor(props) {
        super(props);
        this.state = { tasks: [], category: "" }
        this.LoadData();
    }

    LoadData() {
        if (this.tasks == null)
            return this.tasks = []
    }

    componentWillMount() {
        let tasksList = localStorage.getItem('tasks')
        if (tasksList) {
            this.setState({
                tasks: JSON.parse(localStorage.getItem('tasks'))
            })
        }
    }

    getCategories() {
        return [...new Set(this.tasks.map(item => {
            return item.category;
        }))]
    }

    getTasks() {
        return [...new Set(this.tasks.map(item => {
            return item.text;
        }))]
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            category: this.state.category,
            id: Date.now()
        };
        this.setState(state => ({
            tasks: state.tasks.concat(newTask),
            category: ''
        }));

    }

    categoryChange = (e) =>{
        this.setState({ category: e.target.value })
    }



    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }

    render() {
        console.log(this.state.category)
        return (
            <div className="newCategory">
                <form onSubmit={this.handleSubmit} className="add-category">
                    <input onChange={this.categoryChange} type="text" value={this.state.category} placeholder="Enter the category" />
                    <button type="submit"> + </button>
                </form>
            </div>
        )
    }
}