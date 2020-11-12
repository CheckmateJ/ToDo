import React, { Component } from 'react'

class CategoryContext extends Component {
  constructor(props) {
    super(props);
    this.state = { taskCategories: props.tasks, state: props.state, displayCategory: "all" }
    this.setCategory = this.setCategory.bind(this);
  }
  setCategory(category) {  
    this.setState({
     
      displayCategory: category
    });
  }

  updateTaskToShow = (s) => {
    this.setState({
      displayCategory: s
    })
  }
  handleDelete(id) {
    this.props.handleDelete(id);
    window.location.reload(false);
  }


  render() {
    let todos = [];
    var d = new Date();
    var dateYesterday = d.getDate() < 10 ? '0' + (d.getDate() - 1) : '' + d.getDate() - 1
    var dateTomorrow = d.getDate() < 10 ? '0' + (d.getDate() + 1) : '' + (d.getDate() + 1)
    var month = d.getMonth() + 1;
    var year = d.getFullYear();

    var dateStrYesterday = year + "-" + month + "-" + dateYesterday;
    var dateStrTomorrow = year + "-" + month + "-" + dateTomorrow;

    if (this.state.displayCategory === "all") {
      todos = this.state.state.tasks;
    }
    else if (this.state.displayCategory === "tomorrow") {
      todos = this.state.state.tasks.filter(todo => todo.date === dateStrTomorrow);

    }
    else if (this.state.displayCategory === "yesterday") {
      todos = this.state.state.tasks.filter(todo => todo.date === dateStrYesterday);
    }

    return (
      <div>
        <div className="btns">
          <button className="filter" onClick={() => this.updateTaskToShow("yesterday")}>Yesterday</button>
          <button className="filter" onClick={() => this.updateTaskToShow("tomorrow")}>Tomorrow</button>
          {this.state.taskCategories.map(category => (
            <button className="filter"
              key={category}
              onClick={() => this.setCategory(category)} >
              {category}
            </button>
          ))}
        </div>
        <div className="results">
          {/* set on the center in page */}
          <ul className="todo-list">
            {todos.map(task => (
              <li key={task.id}>
                <input type="text" id={task.id} value={task.text} onChange={(e) => { this.props.setUpdate(e.target.value, task.id) }} />
                {task.date}
                <button onClick={this.handleDelete.bind(this, task)}>Delete</button>
              </li>
            ))}
            {this.state.state.tasks.filter(
              ({ category }) =>
                this.state.displayCategory === category
            ).map(({ text }) => (
              <li key={text.id}>
                <input type="text" id={text.id} value={text} onChange={(e) => { this.props.setUpdate(e.target.value, text.id) }} />
                <button onClick={this.handleDelete.bind(this, text)}>Delete</button></li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CategoryContext;
