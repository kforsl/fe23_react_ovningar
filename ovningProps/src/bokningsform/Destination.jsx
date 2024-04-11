import React from 'react'
import arrow from '../assets/arrow.svg'

export default function Destination() {
    return (
        <section className='booking__destination'>
            <article
                className='booking__destination-item booking__destination-item--dark'>
                <h2 className='booking__destination-place'>
                    STOCKHOLM
                    <span className='booking__destination-time'>
                        10:30
                    </span>
                </h2>

            </article>
            <article
                className='booking__destination-item'>
                <h2 className='booking__destination-place'>
                    GÖTEBORG
                    <span className='booking__destination-time'>
                        14:45
                    </span>
                </h2>
            </article>
            <img className="booking__destination-arrow" src={arrow} alt="" />
        </section>
    )
}
