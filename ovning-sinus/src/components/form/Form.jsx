import React from 'react'
import './form.css'

export default function Form({ labelOne, labelTwo, labelThree, labelFour }) {
    return (
        <form className='form'>
            <div className='form__container grid-one'>
                <label className='form__label'>
                    {labelOne}
                </label>
                <input
                    type="text"
                    className='form__input'
                />
            </div>
            <div className='form__container grid-two'>
                <label className='form__label'>
                    {labelTwo}
                </label>
                <input
                    type="text"
                    className='form__input'
                />
            </div>
            <div
                className='form__container grid-three'>
                <label className='form__label'>
                    {labelThree}
                </label>
                <input
                    type="text"
                    className='form__input'
                />
            </div>
            <div
                className='form__container grid-four'>
                <label className='form__label'>
                    {labelFour}
                </label>
                <input
                    type="number"
                    className='form__input'
                />
            </div>
        </form>
    )
}
