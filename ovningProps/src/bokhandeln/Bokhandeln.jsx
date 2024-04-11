import React, { useState } from 'react'
import Header from './Header'
import Products from './Products'
import books from '../assets/books.json'

export default function Bokhandeln() {
    const [nmbrInCart, setNmbrInCart] = useState(0)
    const [itemInCart, setItemInCart] = useState([...books])

    const addToCart = (e) => {
        console.log(e.target.id);
        const book = itemInCart[e.target.id]
        console.log(book);
        const newItemInCart = [...itemInCart]
        const inCart = book.inCart ? book.inCart + 1 : 1
        const newItem = {
            title: book.title,
            author: book.author,
            desc: book.desc,
            genre: book.genre,
            pages: book.pages,
            inCart: inCart

        }
        newItemInCart.splice(e.target.id, 1, newItem)

        setItemInCart(newItemInCart)
        setNmbrInCart(i => i + 1)

    }

    return (
        <div className="app">
            <Header nmbrInCart={nmbrInCart} />
            <Products
                addToCart={addToCart}
                books={itemInCart}
            />
        </div>

    )
}
