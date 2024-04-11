import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './jokeForm.css'

export default function JokeForm({ handleCategory, handleSubmit, handleInput }) {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        axios.get('https://api.chucknorris.io/jokes/categories ')
            .then((response) => {
                setCategories(response.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <form onSubmit={handleSubmit} className='form'>
            <select
                onChange={(e) => handleCategory(e)}
                name="category"
                id="category"
                className='form__select'
            >
                <option value="">n/a</option>
                {
                    categories.map((category, index) => {
                        return <option
                            value={category}
                            key={index}
                        >
                            {category}
                        </option>
                    })
                }
            </select>

            <input
                onChange={handleInput}
                type="text"
                name="textInput"
                id="textInput"
                className='form__input'
            />
            <input
                type="submit"
                value='Submit'
                className='form__submit'
            />


        </form>
    )
}
