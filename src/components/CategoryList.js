import React, { Component } from 'react'
import TaskDataBaseProvider from '../Providers/TaskDataBaseProvider'
export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        let categoryProvider = new TaskDataBaseProvider();
        this.state = { todos: categoryProvider.getCategories(), tasks: [], category: "", local: categoryProvider.addCategory() };
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

    componentDidUpdate(){
        this.state.local();
    }


    render() {
        return (
            <div>
                <div className="btns">
                    {this.state.todos.map(category => (
                        <button className="filter"
                            key={category}
                            onClick={() => this.setCategory(category)} >
                            {category}
                        </button>
                    ))}
                </div>
                <div className="newCategory">
                    <form onSubmit={this.handleSubmit} className="add-category">
                        <input onChange={this.categoryChange} type="text" value={this.state.category} placeholder="Enter the category" />
                        <button type="submit"> + </button>
                    </form>
                </div>
            </div>
        )
    }
}
