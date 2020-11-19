// import React, { Component } from 'react'

// class CategoryList extends Component {
//     setCategory(category) {
//         this.props.setCategory(category);
//     }

//     render() {
//         return (
//             <div>
//                 <ul>
//                     {this.props.categories.map(category => (
//                         <button className="filter"
//                             key={category}
//                             onClick={() => this.props.setCategory(category)} >
//                             {category}
//                         </button>
//                     ))}
//                     {/* {this.state.state.tasks.filter(
//                         ({ category }) =>
//                             this.state.displayCategory === category
//                     ).map(({ text }) => (
//                         <li key={text.id}>
//                             <input type="text" id={text.id} value={text} onChange={(e) => { this.props.setUpdate(e.target.value, text.id) }} />
//                             <button onClick={this.handleDelete.bind(this, text)}>Delete</button></li>))} */}

//                     {/* {this.state.state.tasks.filter(
//                         () => {
//                             if (this.state.displayCategory === '')
//                                 this.state.displayCategory = thelast;
//                         }
//                     ).map(({ text }) => (
//                         <li key={text.id}>
//                             {text}
//                         </li>))} */}
//                 </ul>

//             </div>
//         )
//     }
// }

// export default CategoryList;