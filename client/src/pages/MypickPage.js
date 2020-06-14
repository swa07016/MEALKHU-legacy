import React, { useState } from 'react'
import NavBar from '../components/NavBar';

// auth로 로그인한 사용자일 때와 아닐때 판단해서 화면을 다르게 
// 렌더링

const MypickPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    return (
        <>
            <NavBar/>
            {
                isLogin ? <h1>mypick</h1> : <a>aaa</a>
            }
        </>
    )
}

export default MypickPage;
