import { Input } from 'antd'
import
{ Button } from "antd";
import React from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsSnapchat, BsTwitter } from 'react-icons/bs'
const Socials = () => {
  return (
    <div className='container pt-16 pb-5 -ml-36 sm:block'>
    <h1 className='font-bold mb-2'>SOCIALS</h1>
    <div className='flex  gap-7 lg:flex ' >
        <BsFacebook/>
        <BsTwitter/>
        <BsInstagram/>
        <BsLinkedin/>
        <BsSnapchat />
        </div>
        <div>
            <h2 className='pt-2'>
                SIGNUP FOR KEGEBEREW E-COMMERECE NEWS
            </h2>
            <div className='flex gap-3'>
            <div >
            <Input type="text" placeholder='Your E-Mail' className='w-64 border-2 border-blue-400'/>
            </div>
            <div>
            <Button type="primary">SUBISCRIBE</Button>
            </div>
            </div>
            <p>
              By clicking the subiscribe button, you are agreeing to our <a href="#" className='text-cyan-500 underline'>privacy and cooking policy</a>
            </p>

        </div>
        <div className='pt-7'>
        <div >
          <p>WE ACCEPT
        </p>
        </div>
        <a href="#">
          <img src="/social.PNG" alt="socials" className='pt-7' /></a>
        </div>
    </div>

  )
}

export default Socials