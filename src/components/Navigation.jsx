import React from 'react'
import './Navigation.css'
function Navigation() {
    return (
        <div>
            <nav className="navbar">
                <a className="navbar-brand" style={{fontFamily:'cursive'}}href="/">FlashCards</a>

                    <ul className="navbar-nav list-group-horizontal me-3">
                        <li className="nav-item me-4 active">
                            <a className="nav-link" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/">Link</a>
                        </li>
                    </ul>
            </nav>
        </div>
    )
}

export default Navigation