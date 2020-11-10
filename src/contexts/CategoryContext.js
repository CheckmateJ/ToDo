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

  render() {
    return (
      <div className="navi" >
        <div >
          <h3>Filter by Category</h3>
          {this.state.taskCategories.map(category => (
            <button
              key={category}
              onClick={() => this.setCategory(category)} >
              {category}
            </button>
          ))}
        </div>
        <div >
          <h3>Results</h3>
          <div>
            {this.state.state.tasks.filter(
              ({ category }) =>
                this.state.displayCategory === category || this.state.displayCategory === "all"
            ).map(({ text }) => (
                <div>{text}</div>
              ))}
          </div>
        </div>
      </div>
    )
  }
}

export default CategoryContext;