import React, { Component } from 'react'
import CategoryContext from './CategoryContext';

class TodoContext extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], text: '', name: "Todo List:", date: [], category: "", taskToShow: "", displayCategory: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.categoryChange = this.categoryChange.bind(this);

  }

  setCategory = (category) => {
        this.setState({
          displayCategory: category
        });
      }


  // delete task
  handleDelete(id) {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(el => el !== id)
    }));
  }

  // add new task to list 
  handleSubmit(e) {

    e.preventDefault();
    const newTask = {
      text: this.state.text,
      date: this.state.date,
      category: this.state.category,
      id: Date.now()
    };
    this.setState(state => ({
      tasks: state.tasks.concat(newTask),
      text: '',
      displayCategory: this.state.category

    }));
    // if(this.state.displayCategory)
    // {
    //   // var theLast = this.state.tasks[this.state.tasks.length -1].category
    //   this.setState({
    //     displayCategory: this.state.category
    //   })
    // }
    console.log(this.state.displayCategory)
  }

  // fetch value from input 
  handleChange(e) {
    this.setState({ text: e.target.value })
  }
  dateChange(e) {
    this.setState({ date: e.target.value })
  }
  categoryChange(e) {
    this.setState({ category: e.target.value })
  }

  // save task to local storage
  componentDidUpdate() {
    localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }

  // get task from local storage 
  componentWillMount() {
    let tasksList = localStorage.getItem('tasks')
    if (tasksList) {
      this.setState({
        tasks: JSON.parse(localStorage.getItem('tasks'))
      })
    }
  }

  // edit existing task
  setUpdate(text, id) {
    const tasks = this.state.tasks;
    tasks.map(task => {
      if (task.id === id) {
        task.text = text;
      }
    })
    this.setState({
      tasks: tasks
    })
  }

  render() {

    const uniqueItems = (x, i, array) => array.indexOf(x) === i;
    const TASK_CATEGORIES = this.state.tasks.map(prod => prod.category).filter(
      uniqueItems
    )
    TASK_CATEGORIES.push("all");


    return (
      <div className="container" >
        <div className="header"><h3>{this.state.name}</h3></div>
        {/* <TodoList tasks={this.state.tasks} handleDelete={this.handleDelete} setUpdate={this.setUpdate} groupTasks={todos} /> */}
        <CategoryContext cat={this.state.category} tasksList={this.state.tasks} display={this.state.displayCategory}  setCategory={this.setCategory} state={this.state} taskToShow={this.state.taskToShow} handleDelete={this.handleDelete} setUpdate={this.setUpdate} />
        <div className="form-task">
        <form onSubmit={this.handleSubmit} className="add-list">
          <input onChange={this.categoryChange}  type="text" value={this.state.category} placeholder="Enter the category" />
          <input onChange={this.handleChange} value={this.state.text} placeholder="What do you have to do?" />
          <input onChange={this.dateChange} type="date" placeholder="Add date" id="datepicker" />
          <button type="submit" > + </button>
        </form>
        </div>
      </div>
    )
  }
}



export default TodoContext;