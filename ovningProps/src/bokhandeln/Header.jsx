import React from 'react'
import Logo from './Logo'
import Cart from './Cart'

export default function Header({ nmbrInCart }) {
    return (
        <header className='header'>
            <Logo />
            <Cart nmbrInCart={nmbrInCart} />
        </header>
    )
}
