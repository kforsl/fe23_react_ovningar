import React from 'react'
import './navItem.css'
import { Link } from 'react-router-dom'

export default function NavItem({ active, value, path }) {
    return (
        active ?
            <li className='navigation__list-item'>
                <Link to={path}
                    className='navigation__link 
                    navigation__link--active'
                >
                    {value}
                </Link>
            </li>
            :
            <li className='navigation__list-item'>
                <Link to={path} className='navigation__link'>
                    {value}
                </Link>
            </li>

    )
}
