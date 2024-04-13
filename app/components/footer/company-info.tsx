import React from 'react'

const CompanyInfo = () => {
  return (
    <div className='container pt-16 grid-cols-2 pb-5'>
    <h1 className='font-bold'>COMPANY INFO</h1>
    <a href="/about_us">
        <p>About kegeberew e-commerece</p></a>
        <a href="#">  <p>Social Responsibility</p></a>
        <a href="#"> <p>Affilitate</p></a>
        <a href="#">  <p>Fassion Blogger</p></a>
        <div className='pt-16'>
         <h1>
         &copy; Kegeberew E-Commerce All Right Reserved
         </h1>
         <div>
         <a href="#" className='text-cyan-500 underline'>Privacy Center</a>
         <a href="#" className='text-cyan-500 underline'>Privacy and Cooking Policy</a>
         <a href="#"className='text-cyan-500 underline'>manage Cookies</a>
         <a href="#" className='text-cyan-500 underline'>Terms and Conditions</a>
         </div>
        </div>
    </div>
  )
}

export default CompanyInfo