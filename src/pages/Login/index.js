import React from 'react'
import { Button, Gap,Link } from '../../component/atoms';
import Input from '../../component/atoms/Input';
import {useHistory  } from "react-router-dom";

function Login() {
    const history = useHistory();

    return (
        <div>
            <div className="kiri">haloo</div>
            <div className="kanan">
                <p>Login</p>
                <Input label="Email" placeholder="Email"/>
                <Gap height={2}/>
                <Input label="Password" placeholder="Password"/>
                <Gap height={20}/>
                <Button onClick={()=> history.push("/")} title="Login"/>
                <Gap height={50}/>
                <Link onClick={()=> history.push("/register")} title="Belum punya akun? silahkan Register"/>
            </div>
        </div>
    )
}

export default Login
