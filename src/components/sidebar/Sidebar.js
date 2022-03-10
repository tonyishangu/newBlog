import React from 'react'
import './sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://res.cloudinary.com/dvxr1zote/image/upload/v1604400472/wc0iepha6wgcatkabkkl.jpg" alt="image" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam iure natus eligendi temporibus! Esse facilis et nulla, sed minima ipsa dolores distinctio veritatis voluptates temporibus, doloremque molestiae. Expedita, maxime accusamus.</p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
        </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcons fa-brands fa-facebook-square"></i>
            <i className="sidebarIcons fa-brands fa-twitter"></i>
            <i className="sidebarIcons fa-brands fa-instagram"></i>
            <i className="sidebarIcons fa-brands fa-pinterest"></i>
            </div>
        </div>
    </div>
  )
}

export default Sidebar