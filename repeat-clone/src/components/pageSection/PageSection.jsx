import React from 'react'
import './pageSection.css'
import Card from '../card/Card';

export default function PageSection({ color, content }) {
    return (
        <section style={{ backgroundColor: color }}>
            <section className='page-section__content'>
                <h2 className="page-section__title">{content.title}</h2>
                <div className='page-section__grid'>
                    <p className='page-section__text-content'>
                        {content.desc}
                    </p>
                    <img src={content.src} alt={content.alt} className='page-section__image' />
                </div>
                <h3 className="page-section__sub-title"> {content.subTitle} </h3>


                <div className={content.cards.length === 3 ? 'featured__grid--three' : 'featured__grid'}>
                    {
                        content.cards.map((card, index) => {
                            return <Card
                                card={card}
                                key={index} />
                        })
                    }
                </div>

                {
                    content.btnText ? <a className='page-section__button'> {content.btnText} &rarr;</a> : <></>
                }

                {
                    content.smallCards ?
                        <div className='featured__grid--three'>
                            {content.smallCards.map((card, index) => {
                                return <Card
                                    card={card}
                                    key={index} />
                            })}
                        </div>
                        :
                        <></>
                }
                {
                    content.btnText ? <a className='page-section__button'> {content.btnText} &rarr;</a> : <></>
                }
            </section>
        </section>
    )
}
