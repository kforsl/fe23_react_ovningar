import React from 'react'

export default function SplitInput({ form, handleInput }) {
    return (
        <>
            <label htmlFor={form.id} className={form.labelClass} onChange={handleInput}>
                {form.label}
                <input id={form.id} type={form.type} className={form.inputClass} step={form.step} />
            </label>
        </>
    )
}
