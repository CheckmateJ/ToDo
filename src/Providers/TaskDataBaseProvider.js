import { render } from "@testing-library/react";
import React, { Component } from 'react'
import CategoryList from "../components/CategoryList";

export default class TaskDataBaseProvider extends Component {
    tasks = null;
    arr = [{ "category": "default" }];
    constructor(props) {
        super(props);
        this.LoadData();
        this.state = {tasks: [], category: "",}
        if (this.tasks === null) {
            localStorage.setItem('tasks', JSON.stringify(this.arr))
        }
        // this.addCategory();
        // let categoryList = new CategoryList();
        // this.state = {tasks:  categoryList.state.tasks}
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
            console.log(item.text)
            return item.text;
        }))]
    }

    
    handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            //   text: this.state.text,
            //   date: this.state.date,
            category: this.state.category,
            //   id: Date.now()
        };
        this.setState(state => ({
            tasks: state.tasks.concat(newTask),
            //   text: '',
            //   displayCategory: this.state.category

        }));

    }

    categoryChange = (e) => {
        this.setState({ category: e.target.value })

        console.log(this.state.category)
    }


    
    componentDidUpdate() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    }

    render(){
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