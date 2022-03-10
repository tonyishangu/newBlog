import React from 'react'
import { Link } from 'react-router-dom'
import './topbar.css'

const TopBar = () => {
    const user = true
  return (
    <div className='top'>
        <div className="topLeft">
            <i className="topIcons fa-brands fa-facebook-square"></i>
            <i className="topIcons fa-brands fa-twitter"></i>
            <i className="topIcons fa-brands fa-instagram"></i>
            <i className="topIcons fa-brands fa-pinterest"></i>
        </div>
        <div className="topCenter">
            <ul className="topList">
                <li className="topListItem">
                    <Link to="/" className='link'>HOME</Link>    
                </li>
                <li className="topListItem"><Link to="add" className='link'>WRITE</Link></li>
                <li className="topListItem"><Link to="login" className='link'>{user && "LOGOUT"}</Link></li>
            </ul>
        </div>
        <div className="topRight">
        {user ? (
            <Link to="/update" className='link'>
                <img className=" topImage" src="https://res.cloudinary.com/dvxr1zote/image/upload/v1604657820/qcvb7qroxpk1vwxwmdkw.jpg" alt="profile" />    
            </Link>
            
        ) : (
            <ul className="topList">
                <li className="topListItem">
                    <Link to="login" className='link'>LOGIN</Link>
                </li>
                <li className="topListItem">
                <Link to="signup" className='link'>REGISTER</Link>
                </li>
            </ul>
        )}
        <i className=" topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
    </div>
  )
}

export default TopBar