import React, { Component } from 'react'
import TaskDataBaseProvider from '../Providers/TaskDataBaseProvider'
export default class CategoryList extends Component {
    constructor(props) {
        super(props);
        let categoryProvider = new TaskDataBaseProvider();
        categoryProvider.LoadData(); 
        this.state = { categories: categoryProvider.getCategories()};
    }

    render() {
        return (
            <div>
                <div className="btns">
                    {this.state.categories.map(category => (
                        <button className="filter"
                            key={category}
                            onClick={() => this.setCategory(category)} >
                            {category}
                        </button>
                    ))}
                    <TaskDataBaseProvider/>
                </div>
                
            </div>
        )
    }
}
