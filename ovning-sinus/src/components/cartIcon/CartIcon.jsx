import React from 'react'
import './cartIcon.css'

export default function Cart({ color, handleIsOpen, product, handleInCart }) {
    return (
        color ?
            <li className='cart ' tabIndex='0'>
                <img
                    onClick={handleIsOpen}
                    className='cart-icon'
                    src='../src/assets/cart.svg'
                    alt='Shoppingcart icon'
                />
            </li>
            :
            <img
                onClick={() => { handleInCart(product) }}
                tabIndex='0'
                className='cart-icon'
                src='../src/assets/cart-gray.svg'
                alt='Shoppingcart icon' />
    )
}