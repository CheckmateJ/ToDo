import { render } from "@testing-library/react";
import React, { Component } from 'react'
import _ from 'lodash';


export default class TaskDataBaseProvider extends Component {
    constructor(props) {
        super(props);
        this.LoadData();

    }

    LoadData() {
        this.categories = JSON.parse(localStorage.getItem('props.state.categories'));
        this.tasks = JSON.parse(localStorage.getItem('props.state.tasks'));
        // checking for null or non-array data in localstorage
        if (!this.categories || !this.categories.map) {
            this.categories = [];
        }
        if (!this.tasks || !this.tasks.map) {
            this.tasks = [];
        }
    }


    getCategories() {
        const category = [...new Set(this.categories.map(item => {
            return item;
        }))]

        return category
    }

    saveCategory(category) {
        this.categories.push(category);
        localStorage.setItem('props.state.categories', JSON.stringify(this.categories))
    }

    getTasks() {
        return [...new Set(this.tasks.map(item => {
            return item;
        }))]
    }

    saveTask(task) {
        this.tasks.push(task);
        localStorage.setItem('props.state.tasks', JSON.stringify(this.tasks))
    }



    // delete category
    deleteCategory(id) {
        this.LoadData();
        const filtered = this.categories.filter(cat => cat.id !== id);
        localStorage.setItem('props.state.categories', JSON.stringify(filtered))
        window.location.reload();
    }

    //delete task
    deleteTask(taskName) {
        this.LoadData();
        const filtered = this.tasks.filter(task => task.task !== taskName)
        localStorage.setItem('props.state.tasks', JSON.stringify(filtered))
        window.location.reload();
    }

    // edit existing Category  
    setUpdateCategory(text, id) {
        const categories = this.categories;
        categories.map(cat => {
            if (cat.id === id) {
                cat.category = text
            }
        })
        this.setState({
            categories: localStorage.setItem('props.state.categories', JSON.stringify(this.categories))
        })

    }

    // edit existing task
    setUpdateTask(text, id) {
        const tasks = this.tasks;
        tasks.map(task => {
            if (task.id === id) {
                task.task = text
            }
        })
        this.setState({
            tasks: localStorage.setItem('props.state.tasks', JSON.stringify(this.tasks))
        })

    }

    // counting tasks for each category 
    countingTasks() {
        const result = [...this.tasks.reduce((acc, current) => {
            if (!acc.has(current.id)) acc.set(current.id, { ...current, count: 0 });
            acc.get(current.id).count++;
            return acc;
        }, new Map).values()];


        return result

    }

    render() {
        return (<div>

        </div>)
    }
}
