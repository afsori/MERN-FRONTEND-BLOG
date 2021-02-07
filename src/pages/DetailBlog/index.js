import React from 'react';
import {useHistory} from "react-router-dom";

import img from '../../assets/image/oke2.PNG'
import { Link } from '../../component'

function DetailBlog() {
    const history = useHistory();

    return (
        <div>
            <img style={{width:"100px"}} src={img}/>
            <p>Ini detail blog</p>
            <p>Ini detail blog</p>
            <p>Ini detail blog</p>
            <Link title="Back" onClick={()=> history.push("/")}/>

        </div>
    )
}

export default DetailBlog
