import { useContext } from 'react'
import { Link } from 'react-router-dom'


export default function Navbar () {

    return (
        <nav className="navbar">
            <h1>My Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/add">New Blog</Link>
            </div>
        </nav>
    )
}