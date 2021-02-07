import React from 'react'
import img from '../../../assets/image/oke2.PNG'
function Upload() {
    return (
        <div>
        <div>
            <img style={{width:"100px"}} src={img}/>
        </div>
            <input type="file" />
        </div>
    )
}

export default Upload
