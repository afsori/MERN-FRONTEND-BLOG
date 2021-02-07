import React from 'react';
import {useHistory  } from "react-router-dom";
import { Button, Gap,Link } from '../../component/atoms';
import Input from '../../component/atoms/Input';
import "./register.scss";

function Register() {
    const history = useHistory();


    return (
        <div>
            <div className="kiri">haloo</div>
            <div className="kanan">
                <p>Form Register</p>
                <Input label="full name" placeholder="full name"/>
                <Gap height={2}/>
                <Input label="Email" placeholder="Email"/>
                <Gap height={2}/>
                <Input label="Password" placeholder="Password"/>
                <Gap height={20}/>
                <Button onClick={()=> history.push("/login")} title="Register"/>
                <Gap height={50}/>
                <Link onClick={()=> history.push("/login")} title="kembali ke Login"/>
            </div>
        </div>
    )
}

export default Register
