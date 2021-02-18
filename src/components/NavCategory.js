import React from 'react'
import { Link } from 'react-router-dom'

const NavCategory = (props) => {

    const renderCategoryNav = () => {
        let Category = props.categories.map(category => <Link to = {`/category/${category.id}`}> {category.category}  </Link> )
        return Category
    }
    return (
        <div>
            <Link to='/'> Home </Link>
            {renderCategoryNav()}
        </div>
    )
}

export default NavCategory