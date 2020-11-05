import React, { Component } from 'react'
import TodoList from '../components/TodoList';

class TodoContext extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], text: '', name: "Todo List:", date: [], category: ' ' };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    // this.handleDisplay = this.handleDisplay.bind(this);
  }

  // SHOW ONLY ONCE EACH CATEGORY 
  // handleDisplay() {
  //   if (this.state.tasks.map(task => (task.category)).includes(this.state.category)) {
  //     console.log('jest juz taka kategoria')
  //   }
  //   else {
  //     console.log(this.state.tasks.map(task => (
  //       task.category)))
  //   }
  // }


  // delete task
  handleDelete(id) {
    this.setState(prevState => ({
      tasks: prevState.tasks.filter(el => el != id)
    }));
  }

  // add new task to list 
  handleSubmit(e) {
    e.preventDefault();
    // console.log(this.state.tasks.map(task => task.category))
    const newTask = {
      text: this.state.text,
      date: this.state.date,
      category: this.state.category,
      id: Date.now()
    };
    this.setState(state => ({
      tasks: state.tasks.concat(newTask),
      text: ''

    }));

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
    return (
      <div className="container" >
        <div className="header"><h3>{this.state.name}</h3></div>
        <div className="todo">
          <TodoList tasks={this.state.tasks} handleDelete={this.handleDelete} setUpdate={this.setUpdate} />
        </div>
        <div >
          <form onSubmit={this.handleSubmit} className="add-list">
            <input onChange={this.categoryChange} value={this.state.category} placeholder="Enter the category" />
            <input onChange={this.handleChange} value={this.state.text} placeholder="What do you have to do?" />
            <input onChange={this.dateChange} type="date" placeholder="Add date" id="datepicker" />
            <button type="submit"> + </button>
          </form>
          {/* <button onClick={this.handleDisplay}>show</button>  */}
        </div>
      </div>
    )
  }
}


export default TodoContext;