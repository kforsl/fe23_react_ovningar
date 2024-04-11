import React from 'react'

function TenNavItem() {
    const navItems = ['Home', 'Article', 'Shop', 'About']
    return navItems.map((item, index) => <li className='ten-nav__list-item' key={index}> {item} </li>)
}

export default TenNavItem
