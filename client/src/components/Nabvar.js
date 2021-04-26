import React from 'react'
import { Link } from 'react-router-dom'

export default function Nabvar() {
    return (

        <nav>
            <div className="nav-wrapper white" >
                <Link className="brand-logo left" to="/">Instagram</Link>
                <ul id="nav-mobile" className="right">
                    <li><Link to="/signin">Login</Link></li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/create">Create post</Link></li>
                </ul>
            </div>
        </nav>

    )
}
