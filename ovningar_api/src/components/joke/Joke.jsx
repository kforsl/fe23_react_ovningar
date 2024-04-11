import React from 'react'
import './joke.css'

export default function Joke({ joke }) {

    return (
        <p className='joke'>{joke}</p>
    )
}
