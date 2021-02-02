import React, { Component } from 'react'
import TaskDataBaseProvider from '../Providers/TaskDataBaseProvider'
export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        let taskProvider = new TaskDataBaseProvider();
        this.state = { todos: taskProvider.getCategories() };
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
            </div>
        )
    }
}
