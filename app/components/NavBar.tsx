"use client";
import Link from 'next/link'
import React, { useState } from 'react'
import { FaBars, FaBook, FaDownload, FaHome, FaPhone, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [sidebar , setSidebar] = useState (false)
  const handleSidebar = () => {
    setSidebar (!sidebar) 
  }
  return (
    <div className='container'>
      <div className='flex w-fit gap-10 mx-auto font-medium py-8 text-black text-lg'>
        <div className='menu-container'>
             <button onClick = {handleSidebar}>
            <FaBars/>
            </button>
            <div className={sidebar ? 'ml-32 bg-white fixed inset-y-16 left-0 w-96 opacity-80 visible cursor-pointer ' : 'bg-white fixed inset-y-12 -left-full w-96 opacity-100 visible'}>
            <button className='absolute -right-8 rounded-full text-gray-500  transition hover:text-red-400' onClick={handleSidebar}>
                <FaTimes />
            </button>
              <ul>
                <li onClick={handleSidebar}>
                      <a className='inline-flex  inset-x-12 left-0 items-center transition w-full pb-5'>
                      <FaHome className='ml-3'/>
                      Home
                      </a>
                </li>
                <li onClick={handleSidebar}>
                      <a className='inline-flex  inset-x-12 left-0 items-center transition w-full pb-5'>
                      <FaBook className='ml-3'/>
                      Blog
                      </a>
                </li>
                <li onClick={handleSidebar}>
                      <a className='inline-flex  inset-x-12 left-0 items-center transition w-full pb-5'>
                      <FaDownload className='ml-3'/>
                      Contct
                      </a>
                </li>
                <li onClick={handleSidebar}>
                      <a className='inline-flex  inset-x-12 left-0 items-center transition w-full'>
                      <FaPhone className='ml-3'/>
                      Phone
                      </a>
                </li>
              </ul>
            </div>
        </div>
        <Link className='navbar_link relative' href='/'>
          All</Link>
        <Link className='navbar_link relative' href='/new_arrivals'>
          New Arrival</Link>
        <Link className='navbar_link relative' href='/electronics'>
          Electronics</Link>
        <Link className='navbar_link relative' href='/furniture'>
          Furnitures</Link>
        <Link className='navbar_link relative' href='/vegetable_and_firut'>
          Vegetable & Fruites</Link>
        <Link className='navbar_link relative' href='/meet_and_meet_product'>
          Meet & Meet Products</Link>
        <Link className='navbar_link relative' href='/shoes'>
          Shoes</Link>
        <Link className='navbar_link relative' href='/medicine'>
          Medicines</Link>
        <Link className='navbar_link relative' href='jeweliries'>
          Jewelries</Link>
        <Link className='navbar_link relative' href='/beverages'>
          Beverages</Link>
        <Link className='navbar_link relative' href='/book'>
          Books</Link>
      </div>
    </div>
  )
}

export default NavBar