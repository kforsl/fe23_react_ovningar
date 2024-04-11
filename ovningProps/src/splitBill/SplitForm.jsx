import React from 'react'
import SplitBtn from './SplitBtn'
import SplitInput from './SplitInput'
import splitBillForm from '../assets/splitBillForm.json'

export default function SplitForm({ handleCaculation, handleInput }) {
    return (
        <form className='split__form'>
            {splitBillForm.map((form, index) => <SplitInput form={form} key={index} handleInput={handleInput} />)}
            <SplitBtn handleCaculation={handleCaculation} />
        </form>
    )
}
