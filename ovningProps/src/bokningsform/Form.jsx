import React from 'react'
import FormInput from './FormInput'
import bookingForm from '../assets/bookingForm.json'
import Button from './Button'

export default function Form({ handleTicketInformation, handleInput }) {
    return (

        <form className='booking__form'>

            {bookingForm.map((input, index) =>
                <FormInput input={input} key={index} handleInput={handleInput} />
            )}
            <Button handleTicketInformation={handleTicketInformation} />
        </form >
    )
}
