import React, { Component } from "react"
import {Link} from 'react-router-dom'

export default class HeaderComponent extends Component {

    render() {
        return (
            <div>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div>
                            <a href="/" className="navbar-brand">Weather</a>
                        </div>
                        <ul className="navbar-nav navbar-collapse justify-content-end">
                            <Link className="nav-link" to="/">Home</Link>
                        </ul>
                    </nav>
                </header>
            </div>
        )
    }
}