'use client';
import { Button } from 'antd';
import React from 'react'
const LoginPage = () => {
    const backgroundStyles = {
        backgroundImage: `url('/bg_login.PNG')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '80vw',
        height: '50vw',
    };
    return (
        <div style={backgroundStyles} className='container bg-gray-50'>
            <div className="login">
                <h1 className='text-2xl pb-10'>Login into your account</h1>
                <form action="">
                    <div>
                        <h2 className='-ml-64'>E-mail Address:</h2>
                        <input type="text" placeholder=' E-mail address' />
                        <h1 className='-ml-64'>password :</h1>
                        <input type="password" placeholder='Password' />
                    </div>
                    <a href="/forget_password"><h1 className='ml-40 pt-5 pb-6 text-blue-500'>Forget Password?</h1></a>
                </form>
                <Button className='bg-orange-500 rounded-2xl w-44'>Login now</Button>
                <p className='pt-5 pb-5'>----------OR---------</p>
                <a href="/module"><Button className='bg-orange-500 rounded-2xl w-44'>Signup now</Button></a> 
                <div>
                </div>
            </div>

        </div>
    )
}

export default LoginPage