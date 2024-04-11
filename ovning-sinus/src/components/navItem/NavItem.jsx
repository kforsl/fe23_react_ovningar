import React from 'react'
import './navItem.css'

export default function NavItem({ active, value }) {
    return (
        active ?
            <li className='navigation__list-item'>
                <a
                    className='navigation__link 
                    navigation__link--active'
                >
                    {value}
                </a>
            </li>
            :
            <li className='navigation__list-item'>
                <a className='navigation__link'>
                    {value}
                </a>
            </li>

    )
}
