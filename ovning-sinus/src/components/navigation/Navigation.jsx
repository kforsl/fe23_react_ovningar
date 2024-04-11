import React from 'react'
import './navigation.css'
import NavItem from '../navItem/NavItem'
import Cart from '../cartIcon/CartIcon'

export default function Navigation({ navItems, handleIsOpen }) {
    return (
        <nav className='navigation'>
            <ul className="navigation__list">
                {
                    navItems.map((navItem, index) => {
                        return (
                            <NavItem
                                active={navItem.active}
                                value={navItem.value}
                                key={index}
                            />
                        )
                    })
                }
                <Cart color={true} handleIsOpen={handleIsOpen} />
            </ul>
        </nav>
    )
}
