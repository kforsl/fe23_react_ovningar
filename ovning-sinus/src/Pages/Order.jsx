import React from 'react'
import CartItem from '../components/cartItem/CartItem'

export default function Order({ inCart, totalPrice }) {
    return (
        <div className='order'>
            <h2 className='order__title'> Your Cart </h2>

            <section className='order__content-container'>
                <article className='order__form-container'>
                    <h3 className='order__sub-title'>Items</h3>
                    <section className='order__cart-section'>
                        {
                            inCart.map(item => {
                                return <CartItem item={item} key={item.serial} />
                            })

                        }
                    </section>
                    <section className='order__total-container'>
                        <h3 className='order__total'> Total </h3>
                        <h4 className='order__price'> {totalPrice} </h4>
                    </section>
                </article>
                <article className='order__form-container'>
                    <h3 className='order__sub-title'>Delivery</h3>
                </article>
                <article className='order__form-container'>
                    <h3 className='order__sub-title'>Payment Details </h3>
                </article>
            </section>
            <button className='order__btn'> Take My money! </button>
        </div>
    )
}
