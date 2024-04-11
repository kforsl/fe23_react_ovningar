import React from 'react'
import Option from './Option';


export default function FormInput({ input, handleInput }) {

    return input.type === 'radio' || input.type === 'checkbox' ?
        < label
            htmlFor={input.id}
            className={input.labelClass}
        >
            <input
                type={input.type}
                id={input.id}
                className={input.inputClass}
                name={input.name}
                value={input.value}
                onChange={handleInput}
            />
            {input.label}
        </label >
        :
        input.type === 'select' ?
            <label
                htmlFor={input.id}
                className={input.labelClass}
            >
                {input.label}
                <input.type
                    className={input.inputClass}
                    id={input.id}
                    onChange={handleInput}
                >
                    <Option option={input.options} />
                </input.type>
            </label >
            :
            <label
                htmlFor={input.id}
                className={input.labelClass}>
                {input.label}
                <input
                    type={input.type}
                    className={input.inputClass}
                    id={input.id}
                    onChange={handleInput}
                />
            </label >
}
