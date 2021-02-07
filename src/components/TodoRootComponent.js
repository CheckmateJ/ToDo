import React, { Component } from 'react'
import TaskDataBaseProvider from '../Providers/TaskDataBaseProvider';
import CategoryList from './CategoryList';
import TodoList from './TodoList';

export default class TodoRootComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  name: "Todo List:"};
      }
    render() {
        return (
            <div>
                <div className="container" >
                    <div className="header"><h3>{this.state.name}</h3></div>
                    <CategoryList/>
                    <TodoList/>
                </div>
            </div>
        )
    }
}
