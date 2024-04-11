import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductsCard({ product }) {
    return (
        <Link to={'/product/' + product.serial} >
            <article className='product-card'>

                <h2 style={{
                    fontSize: '2rem',
                    textAlign: 'center'
                }}>
                    {product.title}
                </h2>

                <img
                    src={product.cdnUrl}
                    alt={product.title + 'img'}
                    style={{
                        width: '100%',
                        aspectRatio: '1',
                        objectFit: 'contain',
                    }}
                />

                <p style={{
                    fontSize: '1rem',
                    textAlign: 'center',
                    minHeight: '60px'
                }}> {product.longDesc} </p>
            </article>
        </Link>
    )
}
