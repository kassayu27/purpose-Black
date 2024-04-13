import React, { useState } from 'react'
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'
const HeadeTop = () => {
  return (
    <div className='border-b border-gray-200 hidden sm:block'>
      <div  className='container py-4'>
        <div className='flex justify-between items-center'>
         <div className='hidden lg:flex gap-1'>
        <div className='header_top_wrapper'>
            <BsFacebook/>
        </div>
        <div className='header_top_wrapper'>
            <BsTwitter/>
        </div>
        <div className='header_top_wrapper'>
            <BsInstagram/>
        </div>
        <div className='header_top_wrapper'>
            <BsLinkedin/>
        </div>
        </div>
        <div className='text-gray-500 text-[12px'>
        <b>PURPOSE BLACK</b> GENERATE A NEW ERA
        </div>
          <div className='flex gap-4'>
         <select 
         className='text-gray-500 text-[12px] w-[70px]'
         name='currency'
         id='currency'
         >
         <option value='addisababa'>Addis Ababa</option>
         <option value='oromia'>Oromia</option>
        <option value='amhara'>Amhara</option>
        <option value='tigray'>Tigray</option>
        <option value='tigray'>Afar</option>
        <option value='tigray'>Somalia</option>
        <option value='tigray'>SNNP</option>
        <option value='tigray'>Harari</option>
        <option value='tigray'>B/gumz</option>
         </select>
         <select 
         className='text-gray-500 text-[12px] w-[70px]'
         name='language'
         id='language'
         >
         <option value='English'>English</option>
        <option value='Amharic'>Amharic</option>
         </select>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeadeTop