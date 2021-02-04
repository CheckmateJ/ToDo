import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Link, Route, Switch } from 'react-router-dom'
import TodoRootComponent from '../components/TodoRootComponent'


export default class AppContext extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        {/* <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/about">About</Link>
                            </li>
                            <li>
                                <Link to="/users">Users</Link>
                            </li>
                        </ul> */}
                    </nav>
                    <Switch>
                        <Route path="/">
                            <TodoRootComponent/>
                        </Route>
                    </Switch>
                </div>
            </Router>

        )
    }
}
