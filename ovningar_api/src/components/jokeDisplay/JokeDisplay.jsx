import React from 'react'
import Joke from '../joke/Joke'
import './jokeDisplay.css'

export default function JokeDisplay({ jokes }) {
    return (
        <section className='joke__container'>
            {
                typeof (jokes) === 'object' ?
                    jokes.map((joke, index) => {
                        return <Joke joke={joke.value} key={index} />
                    })
                    : <Joke joke={jokes} />

            }

        </section>
    )
}
