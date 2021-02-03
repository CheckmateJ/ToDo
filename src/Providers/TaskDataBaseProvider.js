import { render } from "@testing-library/react";
import React, { Component } from 'react'
import CategoryList from "../components/CategoryList";

export default class TaskDataBaseProvider extends Component {
    tasks = null;
    arr = [{ "category": "default" }];
    constructor(props) {
        super(props);
        this.LoadData();
        if (this.tasks === null) {
            localStorage.setItem('tasks', JSON.stringify(this.arr))
        }
        let categoryList = new CategoryList();
        this.state = {tasks:  categoryList.state.tasks}
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

    
    addCategory() {
        localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
    
    }
}