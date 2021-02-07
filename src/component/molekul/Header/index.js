import React from 'react'
import {useHistory  } from "react-router-dom";

function Header() {
    const history = useHistory();

    return (
        <div>
            <p>Content Header</p>
            <p onClick={()=> history.push("/login")}>Logout</p>
        </div>
    )
}

export default Header