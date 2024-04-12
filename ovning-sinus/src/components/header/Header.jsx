import React, { useState } from 'react'
import './header.css'
import Navigation from '../navigation/Navigation'
import ShopppingCart from '../shoppingCart/ShopppingCart'
import { Link } from 'react-router-dom'

export default function Header({ inCart, totalPrice, add, remove }) {

    const [isOpen, setIsOpen] = useState(false)

    const handleIsOpen = () => {
        setIsOpen(!isOpen)
    }
    const navItems = [
        {
            value: 'Products',
            path: '/products',
            active: true
        },
        {
            value: 'My Account',
            path: '/account',
            active: false
        },
    ]

    return (
        <header className='header'>
            <section className='header__container'>
                <Link to='/'>
                    <img
                        className='header__logo'
                        src='../src/assets/sinus-logo-horisontal.svg'
                        alt='Sinus skatebords logo'
                    />
                </Link>
                <Navigation navItems={navItems} handleIsOpen={handleIsOpen} />
                <ShopppingCart open={isOpen} inCart={inCart} totalPrice={totalPrice} setIsOpen={setIsOpen} add={add} remove={remove} />
            </section>
        </header>
    )
}
