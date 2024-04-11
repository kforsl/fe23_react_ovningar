import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Product({ products }) {

    const { id } = useParams()

    useEffect(() => {
        const foundProduct = products.find(item => item.serial === id)
        setProduct(foundProduct);
    }, [])

    const [product, setProduct] = useState({})

    console.log(product);
    return (
        <section>
            <h2>{product.title}</h2>
            <img src={product.cdnUrl} alt={product.title + 'img'} />
            <h3> {product.category} </h3>
            <h4> {product.price} sek </h4>
            <p> {product.longDesc} </p>

        </section>
    )
}
