import React from 'react'
//import './login.scss'
//import {FacebookLoginButton} from 'react-social-login-buttons'

const login = () => {
    return (
        <div className="login-form">
            <h1>
                <span className="font-weight-bold">mywebsite </span>.com
            </h1>
            <h2 className="text-center">Welcome</h2>
            <div className="form-group">
                <dl>
                <dt><label className="">Email</label> </dt>
                <dd><input type="email" placeholder="Email" className="form-control"/></dd>
                </dl>
            </div>
            <div className="form-group">
                <dl>
                <dt><label>Password</label></dt>
                <dd><input type="password" placeholder="Password" className="form-control" /> </dd>
                </dl>
            </div>
            <input type="button" className="btn btn-dark btn-block" value="Log in" />
            <div className="text-center pt-3">
                Or continue with your social account
            </div>
           {/*<FacebookLoginButton />*/}
        </div>
    )
}

export default login
