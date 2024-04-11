import React from 'react'
import './yellowSection.css'

export default function YellowSection({ content }) {
    return (
        <section className='section'>
            <div className="content">
                <h2 className='section__title'>
                    {content.title}
                </h2>

                <p className='section__desc'> {content.desc} </p>

                <a className='section__btn'> &rarr; BOOK A DEMO </a>

                <a className='section__link'> Or, get started </a>
            </div>
        </section>
    )
}
