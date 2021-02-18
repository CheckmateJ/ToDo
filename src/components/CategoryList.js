import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TaskDataBaseProvider from '../Providers/TaskDataBaseProvider'
import NavCategory from './NavCategory';
export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        this.categoryProvider = new TaskDataBaseProvider();
        this.state = { categories: this.categoryProvider.getCategories(), category: "" };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newCategory = {
            category: this.state.category,
            id: Date.now()
        };
        this.categoryProvider.saveCategory(newCategory);
        this.setState(state => ({
            categories: this.categoryProvider.getCategories(),
            category: ''
        }));

    }

    categoryChange = (e) => {
        this.setState({ category: e.target.value })
    }

    render() {
        return (
            <div>
                <div className="newCategory">
                    <form onSubmit={this.handleSubmit} className="add-category">
                        <input onChange={this.categoryChange} type="text" value={this.state.category} placeholder="Enter the category" />
                        <button type="submit"> + </button>
                    </form>
                    <NavCategory categories={this.state.categories}/>
                </div>

                {/* <div className="btns">
                    {this.state.categories.map(category => (
                        <button className="filter"
                            key={category}
                            onClick={() => this.setCategory(category)} >
                            {category.category}
                        </button>
                    ))}
                </div> */}
            </div>
        )
    }
}

