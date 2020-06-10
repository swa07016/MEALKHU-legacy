import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons';



const SigninPage = (props) => {
    
//     const [userName, setUserName] = useState('');
//     const [userPw, setuserPw] = useState('');
    
//     const signinApi = (user) => {
//         return fetch('/api/signin', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(user)
//         }).then(response => response.json())
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         if (!userId || !userPw) {
//         return;
//         }
//     try {
//         const response = await loginApi({
//             user_id: userId,
//             user_pw: userPw
//         });

//         if (response.result === 'ok') {
//             setToken();
//         } else {
//             throw new Error(response.error);
//         }
//     } catch (err) {
//             alert('로그인에 실패했습니다.');
//             setUserId('');
//             setUserPw('');
//             console.error('login error', err);
//     }
//     };
// };
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
                    <Input required="required" type="name" placeholder="Enter your name"></Input>
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                    <Input required="required" type="password" placeholder="Enter your password"></Input>
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