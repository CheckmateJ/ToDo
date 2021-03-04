
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import TodoList from './TodoList';
import TaskDataBaseProvider from '../Providers/TaskDataBaseProvider';

export default class NavCategory extends Component {
    constructor(props) {
        super(props);
        this.categoryProvider = new TaskDataBaseProvider();
        this.state = { CategoryId: '', count: this.categoryProvider.countingTasks() }
    }
    setCategory = (category) => {
        this.setState({
            CategoryId: category.id
        });
    }


    deleteCategory(id) {
        this.categoryProvider.deleteCategory(id);
    }

    setUpdateCategory = (text, id) => {
        this.categoryProvider.setUpdateCategory(text, id);
    }




    render() {
        return (
            <div>
                <div className="categoryList">
                    {this.props.categories.map(category => <ul> <Link to={`/category/${category.id}`} onClick={() => this.setCategory(category)}>
                        <input type="text" id={category.id} defaultValue={category.category} onChange={(e) => { this.setUpdateCategory(e.target.value, category.id) }} />
                    </Link>
                        <button onClick={this.deleteCategory.bind(this, category.id)}>Delete</button></ul>)}
                </div>
                <div className="numberOfTasks">
                    {this.state.count.map(el => <ul>{el.count}</ul>)}
                </div>
                <TodoList catId={this.state.CategoryId} />


            </div>
        )
    }
}
