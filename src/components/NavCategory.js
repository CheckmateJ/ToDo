
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import TodoList from './TodoList';
import TaskDataBaseProvider from '../Providers/TaskDataBaseProvider';

export default class NavCategory extends Component {
    constructor(props) {
        super(props);
        this.deleteProvider = new TaskDataBaseProvider();
        this.state = { CategoryId: '' }
    }
    setCategory = (category) => {
        this.setState({
            CategoryId: category.id
        });
    }


    deleteCategory(id) {
        this.deleteProvider.deleteCategory(id);
      }



    render() {
        return (
            <div>
                {this.props.categories.map(category =><ul> <Link to={`/category/${category.id}`}onClick={() => this.setCategory(category)}> {category.category}</Link>
                 <button onClick={this.deleteCategory.bind(this, category.id)}>Delete</button></ul>)}
                <TodoList catId={this.state.CategoryId} />
            </div>
        )
    }
}
