
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import TodoList from './TodoList';
import TaskDataBaseProvider from '../Providers/TaskDataBaseProvider';

export default class NavCategory extends Component {
    constructor(props) {
        super(props);
        this.categoryProvider = new TaskDataBaseProvider();
        this.state = { CategoryId: '' }
    }
    setCategory = (category) => {
        this.setState({
            CategoryId: category.id
        });
    }


    deleteCategory(id) {
        this.categoryProvider.deleteCategory(id);
    }

      setUpdate = (text,id) => {
        this.categoryProvider.setUpdate(text,id);
    }




    render() {
        return (
            <div>
                {this.props.categories.map(category => <ul> <Link to={`/category/${category.id}`} onClick={() => this.setCategory(category)}>
                    <input type="text" id={category.id} value={category.category} onChange={(e) => { this.setUpdate(e.target.value, category.id) }}/></Link>
                    <button onClick={this.deleteCategory.bind(this, category.id)}>Delete</button></ul>)}
                <TodoList catId={this.state.CategoryId} />
            </div>
        )
    }
}
