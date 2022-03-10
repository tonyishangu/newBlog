import React from 'react'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React</span>
            <span className='headerTitleLg '>Blog</span>
        </div>
        <img className='headerImg' src="https://res.cloudinary.com/dvxr1zote/image/upload/v1604400405/xuwosfxbyka5h734howy.webp" alt="" />
    </div>
  )
}

export default Header