import React from 'react'

export default function Option({ option }) {
    return option.map((item, index) => <option key={index} value={item}> {item}</option>)
}
