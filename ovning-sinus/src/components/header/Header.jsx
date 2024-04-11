import React, { useState } from 'react'
import './header.css'
import Navigation from '../navigation/Navigation'
import ShopppingCart from '../shoppingCart/ShopppingCart'

export default function Header({ inCart }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    const navItems = [
        {
            value: 'Products',
            active: true
        },
        {
            value: 'My Account',
            active: false
        },
    ]

    return (
        <header className='header'>
            <img
                className='header__logo'
                src='../src/assets/sinus-logo-horisontal.svg'
                alt='Sinus skatebords logo'
            />
            <Navigation navItems={navItems} handleIsOpen={handleIsOpen} />
            <ShopppingCart open={isOpen} inCart={inCart} />
        </header>
    )
}
