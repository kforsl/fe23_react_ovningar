import React, { useState } from 'react'
import InsultHeader from './InsultHeader'
import InsultPage from './InsultPage'
import insults from '../assets/insults.json'

export default function InsultGenerator() {
    const [generatedInsults, setGeneratedInsults] = useState([]);
    const [input, setInput] = useState(0);

    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const cloneInsults = [...insults];
        const newInsults = [];
        for (let i = 0; i < input; i++) {
            const nmbr = Math.floor(Math.random() * cloneInsults.length)
            newInsults.push(cloneInsults.splice(nmbr, 1))
        }
        setGeneratedInsults(newInsults)
    }

    return (
        <section className='insult'>
            <InsultHeader
                handleInput={handleInput}
                handleSubmit={handleSubmit}
            />
            <InsultPage
                generatedInsults={generatedInsults}
            />

        </section>
    )
}
