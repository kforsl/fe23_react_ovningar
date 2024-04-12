import React from 'react'
import './productInformation.css'

export default function ProductInformation({ modalOpen, product, handleModal }) {
    modalOpen && console.log(product);
    return (
        <dialog open={modalOpen} className='product-information'
            onClick={handleModal}>
            <article className='product-information__container'>
                <img
                    src={product.cdnUrl}
                    alt={product.title + 'image'}
                    className='product-information__img'
                />
                <section className='product-information__information-container'>
                    <h3 className='product-information__title'>{product.title}</h3>
                    <h4 className='product-information__sub-title'>{product.shortDesc}</h4>
                    <p className='product-information__desc'>{product.longDesc}</p>
                    <p className='product-information__price'>{product.price} sek</p>
                    <button className='product-information__btn'> Take my money! </button>
                </section>
            </article>

        </dialog>
    )
}
