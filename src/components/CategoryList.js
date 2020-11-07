import React, { Component } from 'react'
import CategoryContext from '../contexts/CategoryContext'

class CategoryList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.categories.map(cat => (
                        <li key={cat.id}>
                            {cat.text}
                        </li>
                    ))}
                </ul>
                
            </div>
        )
    }
}

export default CategoryList;