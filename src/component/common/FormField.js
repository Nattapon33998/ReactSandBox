import React from 'react'

export default function FormField({input, label, type}) {
    return (
        <div>
            <label>{label}</label>
            <input type={type}/>
        </div>
    )
}
