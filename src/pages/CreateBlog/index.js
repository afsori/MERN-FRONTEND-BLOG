import React from 'react'
import { Button, Input, Link, TextArea, Upload } from '../../component'
import {useHistory} from "react-router-dom";

function CreateBlog() {
    const history = useHistory();
    return (
        <div>
            <p>Content Create blog post</p>
            <Link title="Kembali" onClick={()=> history.push("/")}/>
            <Input label="Title"/>
            <Upload />
           <TextArea/>
           <div>
           <Button title="save"/>
           </div>
        </div>
    )
}

export default CreateBlog
