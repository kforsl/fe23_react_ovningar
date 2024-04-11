import JokeForm from '../jokeForm/JokeForm'
import JokeDisplay from '../jokeDisplay/JokeDisplay'
import React, { useState, useEffect } from 'react'
import axios from 'axios'



export default function Generator() {
    const [jokes, setJokes] = useState('')
    const [category, setCategory] = useState('')
    const [input, setInput] = useState('')

    useEffect(() => {
        if (category) {
            axios.get(`https://api.chucknorris.io/jokes/random?category=${category}`)
                .then((response) => {
                    setJokes(response.data.value);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }, [category])

    useEffect(() => {
        if (input.length >= 3) {
            axios.get(`https://api.chucknorris.io/jokes/search?query=${input}`)
                .then((response) => {
                    setJokes(response.data.result);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
    }, [input])

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setInput(e.target[1].value);
    }

    const handleInput = (e) => {
        setInput(e.target.value);
    }

    return (
        <>
            <JokeForm
                handleCategory={handleCategory}
                handleSubmit={handleSubmit}
                handleInput={handleInput}
            />
            <JokeDisplay
                jokes={jokes}
            />
        </>
    )
}
