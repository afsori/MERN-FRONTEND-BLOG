import React from 'react'

function Link({title, onClick}) {
    return (
            <p onClick={onClick}>{title}</p>
    )
}

export default Link
