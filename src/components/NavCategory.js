
import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import TodoList from './TodoList';

export default class NavCategory extends Component {
    constructor(props) {
        super(props);
        this.state = { CategoryId: '' }
    }
    setCategory = (category) => {
        this.setState({
            CategoryId: category.id
        });
    }


    render() {
        return (
            <div>
                {this.props.categories.map(category => <Link to={`/category/${category.id}`} onClick={() => this.setCategory(category)}> {category.category}  </Link>)}
                <TodoList catId={this.state.CategoryId} />
            </div>
        )
    }
}
