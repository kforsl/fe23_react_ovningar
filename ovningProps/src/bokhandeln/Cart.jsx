import React from 'react'

export default function Cart({ nmbrInCart }) {
    return (
        <button className='cart'>
            <p className='cart__title'> Cart </p>
            <p className='cart__counter'> {nmbrInCart} </p>
        </button>
    )
}
