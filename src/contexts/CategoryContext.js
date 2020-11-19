import React, { Component } from 'react'

class CategoryContext extends Component {
  constructor(props) {
    super(props);
    this.state = { state: props.state }
   
  }

  setCategory = (category) => {
            this.props.setCategory(category);
        }

  setUpdate = (text,id) => {
          this.props.setUpdate(text,id);
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
    // console.log(this.props.tasksList)
    let todos = [];
    var d = new Date();
    var dateYesterday = d.getDate() < 10 ? '0' + (d.getDate() - 1) : '' + d.getDate() - 1
    var dateTomorrow = d.getDate() < 10 ? '0' + (d.getDate() + 1) : '' + (d.getDate() + 1)
    var month = d.getMonth() + 1;
    var year = d.getFullYear();

    var dateStrYesterday = year + "-" + month + "-" + dateYesterday;
    var dateStrTomorrow = year + "-" + month + "-" + dateTomorrow;

    if (this.state.displayCategory === "all") {
      todos = this.props.tasksList;
    }
    else if (this.state.displayCategory === "tomorrow") {
      todos = this.props.tasksList.filter(todo => todo.date === dateStrTomorrow);

    }
    else if (this.state.displayCategory === "yesterday") {
      todos = this.props.tasksList.filter(todo => todo.date === dateStrYesterday);
    }

    var display = this.props.tasksList.filter(
      ({ category }) =>
        this.props.display.category === category
    )

    console.log(display);
    // var theLast = this.props.tasksList[this.props.tasksList.length -1].category
    // console.log(theLast)
    // console.log(this.props.display.category)
    return (
      <div>
        <div className="btns">
          <button className="filter" onClick={() => this.updateTaskToShow("yesterday")}>Yesterday</button>
          <button className="filter" onClick={() => this.updateTaskToShow("tomorrow")}>Tomorrow</button>
          {this.props.tasksList.map(category => (
            <button className="filter"
              key={category}
              onClick={() => this.setCategory(category)} >
              {category.category}
            </button>
          ))}
        </div>
        <div className="results">
          <ul className="todo-list">
            {todos.map(task => (
              <li key={task.id}>
                <input type="text" id={task.id} value={task.text} onChange={(e) => { this.props.setUpdate(e.target.value, task.id) }} />
                {task.date}
                <button onClick={this.handleDelete.bind(this, task)}>Delete</button>
              </li>
            ))}
            {/* {this.props.tasksList.filter(
              ({ category }) =>
                this.props.display.category === category
            ).map(({ text }) => (
              <li key={text.id}>
                <input type="text" id={text.id} value={text} onChange={(e) => { this.setUpdate(e.target.value, text.id) }} />
                <button onClick={this.handleDelete.bind(this, text)}>Delete</button></li> */}
            {/* ))} */}
            {display.map(cat => (
              <li>
              <input type="text" value={cat.text} onChange={(e) => { this.props.setUpdate(e.target.value, cat.id) }}/>
              <button onClick={this.handleDelete.bind(this, cat)}>Delete</button>
             </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CategoryContext;
