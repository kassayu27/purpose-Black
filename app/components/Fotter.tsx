"use client";
import React from 'react'
import CompanyInfo from './footer/company-info'
import HelpAndSupport from './footer/help-and-support'
import CustomerCare from './footer/customer-care'
import Socials from './footer/socials';

const Footer = () => {
  return (
   <div className='container pt-5 flex mr-36 '>
    <CompanyInfo />
    <HelpAndSupport />
    <CustomerCare />
    <Socials />
    </div>
  )
}

export default Footer