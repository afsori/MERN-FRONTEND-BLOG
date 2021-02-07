import React from 'react'
import {useHistory} from "react-router-dom";
import img from '../../../assets/image/banner yb.png'
import { Button, Gap } from '../../atoms';

function BlogItem() {
    const history = useHistory();

    return (
        <div>
            <img style={{width:"20%"}} src={img} alt="image-setting"/>
            <div>
                <p>Title Blog</p>
                <p>Author - Date Post</p>
                <p>Lorem ipsum</p>
                <Button title="View Detail" onClick={()=> history.push("/detail-blog")}/>
            </div>
            <div>
                <Button title="Previous"/>
                <Gap height={20}/>
                <Button title="Next"/>
            </div>

        </div>
    )
}

export default BlogItem
