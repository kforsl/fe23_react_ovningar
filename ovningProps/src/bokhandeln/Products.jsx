import React from 'react'
import Book from './Book'


export default function Products({ addToCart, books }) {
    return (
        <section className='bookshelf'>
            {books.map((book, index) =>
                <Book book={book}
                    key={index}
                    addToCart={addToCart}
                    index={index} />)}
        </section>
    )
}
