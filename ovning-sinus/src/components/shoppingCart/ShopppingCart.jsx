import React, { useEffect, useState } from 'react'
import './shoppingCart.css'
import CartItem from '../cartItem/CartItem'

export default function ShopppingCart({ open, inCart }) {
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let price = 0
        inCart.map(item => {
            price += item.price
        })
        setTotalPrice(price)
    }, [inCart])
    return (
        <dialog
            open={open}
            className='shopping-cart'
        >
            {inCart.length === 0 ?
                <h2> No item in cart </h2>
                :
                <section className='shopping-cart__items'>
                    {
                        inCart.map(item => {
                            return (
                                <CartItem
                                    item={item}
                                    key={item.serial}
                                />
                            )
                        })
                    }
                </section>}


            <section className='shopping-cart__total-container'>
                <h3 className='shopping-cart__total'> Total </h3>
                <h4 className='shopping-cart__price'> {totalPrice} </h4>
            </section>
            <button className='shopping-cart__btn'> Take My money! </button>

        </dialog>
    )
}
