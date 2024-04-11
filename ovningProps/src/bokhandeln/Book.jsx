import React from 'react'

export default function Book({ book, addToCart, index }) {
    return (
        <article className='book'>
            <div>
                <h2 className='book__title'> {book.title} </h2>
                <h3 className='book__author'> Av {book.author}</h3>
            </div>
            <p className='book__description'> {book.desc}</p>
            <button
                className='book__add-btn'
                onClick={addToCart}
                id={index}
            >
                {!book.inCart ? "Add to cart" : `Added to cart ${book.inCart}`}
            </button>
        </article>
    )
}
