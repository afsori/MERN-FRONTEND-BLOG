import React from 'react'

function Input({label, ...rest}) {
    return (
        <div>
            <p>{label}</p>
            <input {...rest}/>
        </div>
    )
}

export default Input
