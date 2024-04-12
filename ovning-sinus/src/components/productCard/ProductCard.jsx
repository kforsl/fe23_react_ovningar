import React, { useState } from 'react'
import './productCard.css'
import Cart from '../cartIcon/CartIcon'
import ProductInformation from '../productInformation/ProductInformation'


export default function ProductCard({ product, handleInCart }) {

    const [modalOpen, setModalOpen] = useState(false)

    const handleModal = () => {
        setModalOpen(!modalOpen)
    }

    return (
        <>
            <article className='product-card' tabIndex='0' onClick={() => handleModal()}>
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
                    <ul>
                        <Cart handleInCart={handleInCart} product={product} />
                    </ul>
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
            <ProductInformation
                modalOpen={modalOpen}
                product={product}
                handleModal={handleModal}
            />
        </>
    )
}
