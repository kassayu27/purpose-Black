'use client';
import { Button } from 'antd';
import React from 'react'

const ForgetPassword = () => {
  return (
    <div className='container bg-gray-50'>
      <div className="forget_password">
        <h1 className='text-2xl -ml-40'>Forget your account</h1>
        <form action="">
          <div className='flex pt-6'>
            <div className='w-96'>
              <input type="text" placeholder='Insert your E-Mail to Search...' />
            </div>
            <div className='pt-1'>
              <Button className='  w-36 h-10' type='primary'>Search</Button>
            </div>
          </div>
        </form>

      </div>

      <div className='flex pt-28'>
        <div>
          <img src="/logo.PNG" alt="Forgret tips" />
        </div>
        <div className='ml-96'>
          <p className='text-center font-black underline font-serif text-2xl'>Steps for Reset passwords</p>
        </div>
      </div>
      {/*steps  start heare */}
    </div>
  )
}

export default ForgetPassword