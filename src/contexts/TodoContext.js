import React, { Component } from 'react'
import TodoList from '../components/TodoList';
import CategoryContext from './CategoryContext';

class TodoContext extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [], text: '', name: "Todo List:", date: [], category: "", taskToShow: "all"};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.setUpdate = this.setUpdate.bind(this);
    this.dateChange = this.dateChange.bind(this);
    this.categoryChange = this.categoryChange.bind(this);
    this.setCategory = this.setCategory.bind(this);

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


  setCategory(category) {
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
    // this.state.tasks.forEach(element => console.log(element));

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


  updateTaskToShow = (s) => {
    this.setState({
      taskToShow: s
    })
  }




  render() {

    const uniqueItems = (x, i, array) => array.indexOf(x) === i;
    const TASK_CATEGORIES = this.state.tasks.map(prod => prod.category).filter(
      uniqueItems
    )
    TASK_CATEGORIES.push("all");


    let todos = [];
    var d = new Date();
    var dateYesterday = d.getDate() < 10 ? '0' + (d.getDate() - 1) : '' + d.getDate() - 1
    var dateYesterday = d.getDate() < 10 ? '0' + (d.getDate() - 1) : '' + d.getDate() - 1
    var dateTomorrow = d.getDate() < 10 ? '0' + (d.getDate() + 1) : '' + d.getDate() + 1
    var month = d.getMonth() + 1;
    var year = d.getFullYear();

    var dateStrYesterday = year + "-" + month + "-" + dateYesterday;
    var dateStrTomorrow = year + "-" + month + "-" + dateTomorrow;

    if (this.state.taskToShow === "all") {
      todos = this.state.tasks;
    }
    else if (this.state.taskToShow === "tomorrow") {
      todos = this.state.tasks.filter(todo => todo.date === dateStrTomorrow);
    }
    else if (this.state.taskToShow === "yesterday") {
      todos = this.state.tasks.filter(todo => todo.date === dateStrYesterday);
    }

    return (
      <div className="container" >
        <div className="header"><h3>{this.state.name}</h3></div>
        <div className="todo">
          <TodoList tasks={this.state.tasks} handleDelete={this.handleDelete} setUpdate={this.setUpdate} groupTasks={todos} />
          <CategoryContext tasks={TASK_CATEGORIES} setCategory={this.setCategory} state={this.state}/>
          {/* <UI setCategory={this.setCategory} state={this.state} /> */}
        </div>
        <div >
          <form onSubmit={this.handleSubmit} className="add-list">
            <input onChange={this.categoryChange} value={this.state.category} placeholder="Enter the category" />
            <input onChange={this.handleChange} value={this.state.text} placeholder="What do you have to do?" />
            <input onChange={this.dateChange} type="date" placeholder="Add date" id="datepicker" />
            <button type="submit" > + </button>
          </form>
          
          <button onClick={() => this.updateTaskToShow("yesterday")}>yest</button>
          <button onClick={() => this.updateTaskToShow("all")}>all tasks</button>
          <button onClick={() => this.updateTaskToShow("tomorrow")}>tomorrow</button>
        </div>
      </div>
    )
  }
}

// const ProductItems = ({ state: { tasks, displayCategory } }) => (
//   <div>
//     {tasks
//       .filter(
//         ({ category }) =>
//           displayCategory === category || displayCategory === "all"
//       )
//       .map(({ text }) => (
//         <div>{text}</div>
//       ))}
//   </div>
// );

// const ButtonCategories = (taskCategories, setCategory) =>
//   taskCategories.map(categories => (
//     <button
//       key={categories}
//       onClick={() => setCategory(categories)} >
//       {categories}
//     </button>
//   ));

// const UI = ({
//   state,
//   state: { taskCategories },
//   setCategory
// }) => (
//     <div >
//       <div >
//         <h3>Filter by Category</h3>
//         {ButtonCategories(taskCategories, setCategory)}
//       </div>
//       <div >
//         <h3>Results</h3>
//         <ProductItems state={state} />
//       </div>
//     </div>
//   );



export default TodoContext;