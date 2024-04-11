import React from 'react'

export default function Insult({ insult }) {
    return (
        <article className='insult__card'>
            <h3 className='insult__insult-text'> {insult[0].insult} <span className='insult__insult-play'> - {insult[0].play} </span> </h3>
        </article>

    )
}
