import React from 'react'
import ProductsCard from '../components/ProductsCard';

export default function Products({ products }) {

    return (
        <div className='product-grid'>
            {
                products.map(product => {
                    return <ProductsCard product={product} key={product.serial} />
                })
            }
        </div>
    )
}
