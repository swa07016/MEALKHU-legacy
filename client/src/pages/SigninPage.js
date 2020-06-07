import React from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

import {FacebookLoginButton} from 'react-social-login-buttons';

const SigninPage = (props) => {
    return (
        <>
            <Form style={{
                width:'100%',
                maxWidth:'330px',
                padding:'15px',
                margin:'auto',
                height:'100%'
            }}>
                <a href='/' style={{'color':'#000000', textDecoration:'none'}}>
                <h1 className="text-center">
                    <span className="font-weight-bold">MEALKHU</span>.com
                </h1>
                </a>
                <h2 className="text-center"><br/>Sign In</h2>
                <FormGroup>
                    <Label>Username</Label>
                    <Input type="name" placeholder="Enter your name"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input type="password" placeholder="Enter your password"></Input>
                </FormGroup>
                <FormGroup>
                    <Button className="btn-lg btn-dark btn-block">Sign in</Button>
                </FormGroup>
                <div className="text-center pt-3">
                Or continue with your social account
                </div>
                <FacebookLoginButton className="mt-3 mb-3"/>
                <div className="text-center">
                    <a href="/signup">Sign up here!</a>
                </div>
            </Form>
            
        </>
    );
}

export default SigninPage;