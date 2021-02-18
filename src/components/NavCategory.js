
import { Link } from 'react-router-dom'

import React, { Component } from 'react'

export default class NavCategory extends Component {
    constructor(props) {
        super(props);
        this.state = {CategoryId: ''}
    }
  
    render() {
        return (
            <div>
                {this.props.categories.map(category => <Link to = {`/category/${category.id}`}> {category.category}  </Link> )}
            </div>
        )
    }
}
