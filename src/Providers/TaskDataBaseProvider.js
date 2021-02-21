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
        // console.log(this.categories.map(cat => cat.id))
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
            const items = this.categories
            const filtered = items.filter(item => item.id !== id );
            localStorage.setItem('props.state.categories', JSON.stringify(filtered))
            this.LoadData();
            window.location.reload();  
    }

    render() {
        return (<div>

        </div>)
    }
}
