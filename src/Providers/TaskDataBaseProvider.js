import { render } from "@testing-library/react";
import React, { Component } from 'react'


export default class TaskDataBaseProvider extends Component {
    
    arr = [{ "category": "default" }];
    constructor(props) {
        super(props);
        this.state = { tasks: [], category: "" }
        if (this.tasks == null) {
            localStorage.setItem('tasks', JSON.stringify(this.arr))
        }
        this.LoadData();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.categoryChange = this.categoryChange.bind(this);
    }

    LoadData() {
        this.tasks = JSON.parse(localStorage.getItem('tasks'))
    }

    getCategories() {

        return [...new Set(this.tasks.map(item => {
            console.log(item.category)
            return item.category;
        }))]
    }

    getTasks() {
        return [...new Set(this.tasks.map(item => {
            return item.text;
        }))]
    }


    handleSubmit(e) {
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

    categoryChange(e) {
        this.setState({ category: e.target.value })
    }



    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }

    render() {
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