
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

    setUpdateCategory = (text, id) => {
        this.categoryProvider.setUpdateCategory(text, id);
    }

    // count = () =>{

    // //   for (const id of this.state.count) {
    // //       return id
    // //   }
    //     this.state.count.map(el => { return el  })
    //     for (var i = 0; i < this.state.count.length; i++) {
    //         return this.state.count[i]

    //     }

    // }







    render() {
        console.log(this.props.categories)
        return (
            <div>
                 
                {this.props.categories.map(category => <ul> <Link to={`/category/${category.id}`} onClick={() => this.setCategory(category)}>
                    <input type="text" id={category.id} defaultValue={category.category} onChange={(e) => { this.setUpdateCategory(e.target.value, category.id) }} />
                    
                </Link>
                {category.count}
                    <button onClick={this.deleteCategory.bind(this, category.id)}>Delete</button></ul>)}
               
                <TodoList catId={this.state.CategoryId} />


            </div>
        )
    }
}
