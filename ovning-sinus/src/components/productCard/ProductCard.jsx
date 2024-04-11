import React from 'react'
import './productCard.css'
import Cart from '../cartIcon/CartIcon'

export default function ProductCard({ product, handleInCart }) {
    return (
        <article className='product-card'>
            <section className='product-card__top'>
                <div>
                    <h2
                        className=''
                    >
                        {product.title}
                    </h2>
                    <p
                        className=''
                    >
                        {product.shortDesc}
                    </p>
                </div>
                <Cart handleInCart={handleInCart} product={product} />
            </section>
            <section className='product-card__bottom'>
                <img
                    className='product-card__img'
                    src={product.cdnUrl}
                    alt={`${product.category} ${product.title} image`}
                />
                <h3
                    className='product-card__price'>
                    {product.price}
                    <span> SEK </span>
                </h3>
            </section>
        </article>
    )
}
