import React, { useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/productCard/ProductCard'

const getProducts = (setProducts) => {
    axios.get('https://santosnr6.github.io/Data/sinus_products.json')
        .then(response => {
            setProducts(response.data)
        })
        .catch(error => console.log(error))
}

export default function Products({ handleInCart }) {
    const [products, setProducts] = useState([])

    useEffect(() => {
        getProducts(setProducts)
    }, [])

    return (
        <section className='products'>
            {
                products.map((product) => {
                    return <ProductCard
                        product={product}
                        key={product.serial}
                        handleInCart={handleInCart}
                    />
                })
            }

        </section>
    )
}
