import { render } from "@testing-library/react";
import React, { Component } from 'react'


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
        return [...new Set(this.categories.map(item => {
            return item;
        }))]
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

    // edit existing task
    setUpdate(text, id) {
        const categories = this.categories;
        categories.map(cat => {
            if (cat.id === id) {
                cat.category = text;
            }
        })
        this.setState({
            categories: categories
        })
    }

    render() {
        return (<div>

        </div>)
    }
}
