import { render } from "@testing-library/react";
import React, { Component } from 'react'


export default class TaskDataBaseProvider extends Component {
    constructor(props) {
        super(props);
        // this.state = { category: this.props.category}
        // this.LoadData();
        // console.log(this.props.cat)
    }

    LoadData() {
        console.log(this.props.state.categories)
        if (this.props.state.categories == null)
            return this.props.state.categories = []
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
        return [...new Set(this.props.state.categories.map(item => {
            return item.category;
        }))]
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