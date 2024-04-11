import React from 'react'
import './cartItem.css'

export default function CartItem({ item }) {
    return (
        <article className='shopping-cart__item'>
            <img
                className='shopping-cart__item-img'
                src={item.cdnUrl}
                alt={`${item.category} ${item.title} image`}
            />
            <section className='shopping-cart__information'>
                <div>
                    <h2> {item.title} </h2>
                    <h4> {item.shortDesc} </h4>
                    <p> {item.serial} </p>
                </div>
                <h3> {item.price} </h3>
            </section>
        </article>
    )
}
