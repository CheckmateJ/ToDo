// create new categories
// create button which value will be map.categories
// on the button create onClick={function which pass us to new form/ page}
// if the  category has some tasks display on the page but if doesn't create new tasks

import React, { Component } from 'react'
import CategoryList from "../components/CategoryList"



class CategoryContext extends Component {
    constructor(props) {
        super()
        this.state = { categories: [], text: '', repeat: '' }
    }


    handleChange = (e) => {
        this.setState({ text: e.target.value })
    }

    
    handleSubmit = (e) => {
        e.preventDefault()
        const newCategory = {
            text: this.state.text,
            id: Date.now()
        }
        
        var i =0;
        const categoryRepeat = {
            text: this.state.text + (i + 1),
            id: Date.now(),
        }
        if (this.state.categories.map(cat => (cat.text)).includes(this.state.text )) {
            this.setState(state => ({
                categories: state.categories.concat(categoryRepeat)
            }))
        }else{
        this.setState(state => ({
            categories: state.categories.concat(newCategory)
        }))}}

    // save task to local storage
    componentDidUpdate() {
            localStorage.setItem('categories', JSON.stringify(this.state.categories))
        }

    // get task from local storage 
    componentWillMount() {
            let categoriesList = localStorage.getItem('categories')
        if(categoriesList) {
                this.setState({
                    categories: JSON.parse(localStorage.getItem('categories'))
                })
            }
        }


    render() {
            return(
            <div className = "navi" >
                <CategoryList categories={this.state.categories} />
                <form onSubmit={this.handleSubmit}>
                    <input onChange={this.handleChange} />
                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}


export default CategoryContext;