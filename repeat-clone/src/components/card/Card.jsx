import React from 'react'
import './card.css'

export default function Card({ card }) {
    return (

        <article className={card.class}>

            {card.src ? <section className='card__img-section'>
                <img src={card.src} alt={card.alt} />
            </section> : <></>}


            <section className='card__text-section'>
                {card.title ? <h3 className='card__title'> {card.title} </h3> : <></>}
                {card.moment ? <span className='card__moment'> {card.moment} </span> : <></>}
                <div className='card__tag-container'>
                    {card.tags ?
                        card.tags.map((tag, index) => {
                            return <span className={'card__tag'} style={{ backgroundColor: tag.color }} key={index} > {tag.text} </span>
                        })
                        : <></>}
                </div>
                {card.desc ? <p className='card__desc'> {card.desc} </p> : <></>}
                {card.author ? <p className='card__author'> {card.author} </p> : <></>}
                {card.brand ? <p className='card__brand'> {card.brand} </p> : <></>}
                {card.btnText ? <a className='card__btn'> {card.btnText} &rarr;</a> : <></>}


            </section>
        </article >
    )
}
