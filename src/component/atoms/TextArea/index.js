import React from 'react'

function TextArea({...rest}) {
    return (
        <div>
            <textarea {...rest}></textarea>
        </div>
    )
}

export default TextArea
