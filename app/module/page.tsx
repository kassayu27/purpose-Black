'use client';
import { Button } from 'antd';
import React from 'react'

const SignUp = () => {
  const backgroundStyles = {
    backgroundImage: `url('/bg_login.PNG')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '80vw',
    height: '50vw',
  };
  return (
    <div style={backgroundStyles} className='container bg-gray-50'>
      <div className="signup">
        <h1 className='text-2xl pb-10'>Signup your account</h1>
        <form action="">
          <div className='flex'>
            <div>
              <h2 className='-ml-36'>First Name :</h2>
              <input type="text" placeholder='First Name' />
              <h1 className='-ml-40'>E-Mail :</h1>
              <input type="text" placeholder='E-Mail' />
              <h1 className='-ml-36'>Password :</h1>
              <input type="password" placeholder='Password' />
            </div>
            <div>
              <h1 className='-ml-36'>Last Name :</h1>
              <input type="text" placeholder='Last Name' />
              <h1 className='-ml-28'>Mobile Number :</h1>
              <input type="email" placeholder='Mobile Number' />
              <h1 className='-ml-24'>Confirm Password :</h1>
              <input type="password" placeholder='Confirm Password' />
            </div>
          </div>
        </form>
        <Button className='bg-orange-500 rounded-2xl w-44'>SignUp Now</Button>
        <div>
          <h1 className='-ml-36 pt-4'>Alraeady have an account ? <a href="/login" className='text-orange-500'>Sign in</a></h1>
        </div>
      </div>
        
    </div>
  )
}

export default SignUp