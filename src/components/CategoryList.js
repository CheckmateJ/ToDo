import React, { Component } from 'react'
import TaskDataBaseProvider from '../Providers/TaskDataBaseProvider'
export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        // let categoryProvider = new TaskDataBaseProvider();
        this.state = { categories: [], category: "dafdf" };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            category: this.state.category,
            id: Date.now()
        };
        this.setState(state => ({
            categories: state.categories.concat(newTask),
            category: ''
        }));

    }

    categoryChange = (e) => {
        this.setState({ category: e.target.value })
    }

    render() {
        console.log(this.state.categories)
        return (
            <div>
                <TaskDataBaseProvider state={this.state}/>
                <div className="newCategory">
                    <form onSubmit={this.handleSubmit} className="add-category">
                        <input onChange={this.categoryChange} type="text" value={this.state.category} placeholder="Enter the category" />
                        <button type="submit"> + </button>
                    </form>
                </div>
                {/* <div className="btns">
                    {this.state.uniqueCategories.map(category => (
                        <button className="filter"
                            key={category}
                            onClick={() => this.setCategory(category)} >
                            {category}
                        </button>
                    ))}
                </div> */}
            </div>
        )
    }
}
