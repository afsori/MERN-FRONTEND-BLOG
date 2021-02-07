import React from 'react'
import { BlogItem, Button } from '../../component'
import {useHistory} from "react-router-dom"

function Home() {
    const history = useHistory();
    return (
        <div>
            <div>
                <Button title="create blog" onClick={()=>history.push("/create-blog")}/>
            </div>
            <BlogItem/>
        </div>
    )
}

export default Home
