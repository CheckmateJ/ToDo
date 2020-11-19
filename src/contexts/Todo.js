// import React, { Component } from 'react'
// import Category from './Category';

// class Todo extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { tasks: [], text: '', name: "Todo List:", date: [], category: ''};
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleDelete = this.handleDelete.bind(this);
//     this.setUpdate = this.setUpdate.bind(this);
//     this.dateChange = this.dateChange.bind(this);
//   }

//   // delete task
//   handleDelete(id) {
//     this.setState(prevState => ({
//       tasks: prevState.tasks.filter(el => el !== id)
//     }));
//   }

//   // add new task to list 
//   handleSubmit(e) {
//     e.preventDefault();
//     const newTask = {
//       text: this.state.text,
//       date: this.state.date,
//       id: Date.now()
//     };
//     this.setState(state => ({
//       tasks: state.tasks.concat(newTask),
//       text: ''  
//     }));

//   }
  
//   setCategory = (category) => {
//     var  thelast = this.props.categories[this.props.categories.length - 1];
//     this.setState({
//       category: thelast
//     });
 
//   }

//   // fetch value from input 
//   handleChange(e) {
//     this.setState({ text: e.target.value })
//   }
//   dateChange(e) {
//     this.setState({ date: e.target.value })
//   }

//   // save task to local storage
//   componentDidUpdate() {
//     localStorage.setItem('tasks', JSON.stringify(this.state.tasks))
//   }

//   // get task from local storage 
//   componentWillMount() {
//     let tasksList = localStorage.getItem('tasks')
//     if (tasksList) {
//       this.setState({
//         tasks: JSON.parse(localStorage.getItem('tasks'))
//       })
//     }
//   }

//   // edit existing task
//   setUpdate(text, id) {
//     const tasks = this.state.tasks;
//     tasks.map(task => {
//       if (task.id === id) {
//         task.text = text;
//       }
//     })
//     this.setState({
//       tasks: tasks
//     })
//   }

//   render() {
//     console.log(this.state.category)
//     const uniqueItems = (x, i, array) => array.indexOf(x) === i;
//     const TASK_CATEGORIES = this.state.tasks.map(prod => prod.category).filter(
//       uniqueItems
//     )
//     TASK_CATEGORIES.push("all");

//       // console.log(this.props.setCategory)
//     return (
//       <div className="container" >
//         <div className="header"><h3>{this.state.name}</h3></div>
//         <Category tasks={TASK_CATEGORIES} todoTask={this.state.tasks} setCategory={this.setCategory} state={this.state}  handleDelete={this.handleDelete} setUpdate={this.setUpdate} />
//         <div className="form-task">
//         <form onSubmit={this.handleSubmit} className="add-list">
//           {/* <input onChange={this.categoryChange} type="text" value={this.state.category} placeholder="Enter the category" /> */}
//           <input onChange={this.handleChange} value={this.state.text} placeholder="What do you have to do?" />
//           <input onChange={this.dateChange} type="date" placeholder="Add date" id="datepicker" />
//           <button type="submit" > + </button>
//         </form>
//         </div>
//       </div>
//     )
//   }
// }

// export default Todo;