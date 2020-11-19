// import React, { Component } from 'react'
// import CategoryList from '../components/CategoryList';
// import Todo from './Todo';

// class Category extends Component {
//   constructor(props) {
//     super(props);
//     // this.state = { taskCategories: props.tasks, state: props.state, displayCategory: props.state.category, todoTask: props.todoTask }
//     this.state = {category: [], text: '', displayCategory: ''}
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleSubmit(e) {
//   e.preventDefault(); 
//       let category = [...this.state.category]
//       let newCategory = [...category, this.state.text]
//       this.setState({
//         category: newCategory
//       });
//     }

//     categoryChange = (e) => {
//       this.setState({ text: e.target.value })
//     }
  
//     // save task to local storage
//     componentDidUpdate = () => {
//       localStorage.setItem('category', JSON.stringify(this.state.category))
//     }
  
//     // get task from local storage 
//     componentWillMount= () => {
//       let categoryList = localStorage.getItem('category')
//       if (categoryList) {
//         this.setState({
//           category: JSON.parse(localStorage.getItem('category'))
//         })
//       }
//     }


//   setCategory = (category) => {
//     this.setState({
//       displayCategory: category
//     });
//   }

//   // updateTaskToShow = (s) => {
//   //   this.setState({
//   //     displayCategory: s
//   //   })
//   // }
//   // handleDelete(id) {
//   //   this.props.handleDelete(id);
//   //   window.location.reload(false);
//   // }



//   render() {

//     console.log(this.state.displayCategory);
//     // if(this.state.todoTask != '' )
//     // {
//     //   var thelast = this.state.todoTask[this.state.todoTask.length - 1].category;
//     // }


//     // let todos = [];
//     // var d = new Date();
//     // var dateYesterday = d.getDate() < 10 ? '0' + (d.getDate() - 1) : '' + d.getDate() - 1
//     // var dateTomorrow = d.getDate() < 10 ? '0' + (d.getDate() + 1) : '' + (d.getDate() + 1)
//     // var month = d.getMonth() + 1;
//     // var year = d.getFullYear();

//     // var dateStrYesterday = year + "-" + month + "-" + dateYesterday;
//     // var dateStrTomorrow = year + "-" + month + "-" + dateTomorrow;

//     // if (this.state.displayCategory === "all") {
//     //   todos = this.state.state.tasks;
//     // }
//     // else if (this.state.displayCategory === "tomorrow") {
//     //   todos = this.state.state.tasks.filter(todo => todo.date === dateStrTomorrow);

//     // }
//     // else if (this.state.displayCategory === "yesterday") {
//     //   todos = this.state.state.tasks.filter(todo => todo.date === dateStrYesterday);
//     // }

//     // console.log(this.state.displayCategory)
//    var  thelast = this.state.category[this.state.category.length - 1];
//    console.log(thelast)
//     return (
//       <div>
//        <CategoryList categories={this.state.category} setCategory={this.setCategory}/>
//        <Todo categories={this.state.category}/>
//         <form onSubmit={this.handleSubmit}>
//           <input onChange={this.categoryChange} type="text" value={this.state.text}/>
//           <button type="submit" >+  </button>
//         </form>
//       </div>
//     )
//   }
// }

//  {/* <div className="btns">
//           <button className="filter" onClick={() => this.updateTaskToShow("yesterday")}>Yesterday</button>
//           <button className="filter" onClick={() => this.updateTaskToShow("tomorrow")}>Tomorrow</button>
//           {this.state.taskCategories.map(category => (
//             <button className="filter"
//               key={category}
//               onClick={() => this.setCategory(category)} >
//               {category}
//             </button>
//           ))}
//         </div>
//         <div className="results">
//           <ul className="todo-list">

//             {todos.map(task => (
//               <li key={task.id}>
//                 <input type="text" id={task.id} value={task.text} onChange={(e) => { this.props.setUpdate(e.target.value, task.id) }} />
//                 {task.date}
//                 <button onClick={this.handleDelete.bind(this, task)}>Delete</button>
//               </li>))}

//             {this.state.state.tasks.filter(
//               ({ category }) =>
//                 this.state.displayCategory === category
//             ).map(({ text }) => (
//               <li key={text.id}>
//                 <input type="text" id={text.id} value={text} onChange={(e) => { this.props.setUpdate(e.target.value, text.id) }} />
//                 <button onClick={this.handleDelete.bind(this, text)}>Delete</button></li>))}

//             {this.state.state.tasks.filter(
//               () => {
//                 if (this.state.displayCategory === '')
//                   this.state.displayCategory = thelast;
//               }
//             ).map(({ text }) => (
//               <li key={text.id}>
//                 {text}
//                 </li>))}
//           </ul>

//         </div> */}
// export default Category;
