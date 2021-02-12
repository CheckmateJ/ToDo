import { render } from "@testing-library/react";
import React, { Component } from 'react'


export default class TaskDataBaseProvider extends Component {
    constructor(props) {
        super(props);
        this.LoadData();
        // this.state = { category: this.props.category}
        // console.log(this.props.cat)
    }

    LoadData() {
        this.categories = JSON.parse(localStorage.getItem('props.state.categories'));
        // checking for null or non-array data in localstorage
        if(!this.categories || !this.categories.map) {
            this.categories = [];
        }
    }

    // componentWillMount() {
    //     let categoriesList = localStorage.getItem('categories')
    //     if (props.state.categoriesList) {
    //         this.setState({
    //             props.state.categories: JSON.parse(localStorage.getItem('props.state.categories'))
    //         })
    //     }
    // }

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
        return [...new Set(this.props.state.categories.map(item => {
            return item.text;
        }))]
    }


    // componentDidUpdate() {
    //     localStorage.setItem('categories', JSON.stringify(this.state.props.state.categories))
    // }


    render(){
        return (<div>
            
        </div>)
    }
}
