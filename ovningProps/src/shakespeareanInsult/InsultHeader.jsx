import React from 'react'

export default function InsultHeader({ handleInput, handleSubmit }) {
    return (
        <header className='insult__header'>
            <form className='insult__form' onSubmit={handleSubmit}>
                <input
                    onChange={handleInput}
                    type='number'
                    min='0'
                    max='10'
                    className='insult__input'
                />
                <input type='submit' className='insult__input' />
            </form>
        </header>
    )
}
