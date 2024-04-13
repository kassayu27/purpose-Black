'use client'
import Image from 'next/image'
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const GridHome = () => {
        const settings = {
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                centerPadding: "60px",
                rows: 2,
                slidesPerRow: 2,
                autoplay: true,
                speed: 9000,
                autoplaySpeed:-100,
                cssEase: "linear"
              };
  return (
<div className='container pt-24 grid-cols-4  justify-between bg-slate-50' >
  <div className='flex'>
    <div>
  <h2 className='font-medium text-2xl pb-6 text-justify'>Head Phone</h2>
  <div className='grid lg:grid-cols-[300px,1fr] gap-24'>
   <div className='border border-gray-700 rounded-2xl shadow-lg  h-80'>
        <div className='flex justify-between'>
       <div className='ml-3'>
       <a href="/new_product"> <Image
                className='rounded-2xl inline-block hover:opacity-80'
                src='/phone1.PNG'
        width={280} 
        height={80} 
        alt='Phone1' />
           </a>
        </div>
        </div>
        <div className='flex'>
          <a href="#"> 
        <Image
                className=' hover:bg-gray-500 shadow-lg rounded-2xl ml-2 mb-3 h-36 inline-block hover:opacity-80'
                src='/phone2.PNG'
        width={140} 
        height={36} 
        alt='phone2' />
          </a>
        <div className='float-end '>
          <a href="#">
        <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/phone3.PNG'
        width={140} 
        height={36} 
        alt='phone3' />
        </a>
        </div>
        </div>
        </div>
    </div>
   </div>
   <div>

   <h2 className='font-medium text-2xl pb-6 text-justify'>Phones</h2>
     <div className='grid lg:grid-cols-[300px,1fr] gap-24'>
     <div className='border border-gray-700 rounded-2xl grid shadow-lg  h-80'>
      <div className='flex'>
      <a href='/phone'>  <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/ph1.PNG'
        width={140} 
        height={36} 
        alt='phones' />
        </a>
        <a href='/'>
                <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/ph2.PNG'
        width={140} 
        height={36} 
        alt='phones' />
        </a>
        </div>
        <div className='flex'>
        <a href="/">
        <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/ph3.PNG'
        width={140} 
        height={36} 
        alt='phones' />
        </a>
        <a href="/">
                <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/ph4.PNG'
        width={140} 
        height={36} 
        alt='phones' />
        </a>
        </div>
        </div>
    </div>
   </div>  
   <div>
   <h2 className='font-medium text-2xl pb-6 text-justify'>Arts & Crafts</h2>
   <div className='grid lg:grid-cols-[300px,1fr] gap-24'>
     <div className='border border-gray-700 rounded-2xl grid shadow-lg  h-80'>
      <a href="#">
        <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-80 inline-block hover:opacity-80'
                src='/art.PNG' 
        width={280} 
        height={80} 
        alt='art image' />
        </a>
    </div>
    </div>
   </div>
   <div>
   <h2 className='font-medium text-2xl pb-6 text-justify'>Agriculture</h2>
      <div className='grid lg:grid-cols-[300px,1fr] gap-24'>
     <div className='border border-gray-700 rounded-2xl grid shadow-lg  h-80'>
      <a href="#">
        <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/agri.PNG' 
        width={280} 
        height={36} 
        alt='agriculture' />
        </a>
        <a href="#">
    <Image
                className=' hover:bg-gray-500 shadow-lg rounded-2xl ml-2 mb-3 h-36 inline-block hover:opacity-80'
                src='/agri1.PNG'
        width={280} 
        height={36} 
        alt='agriculture' />
        </a>
    </div>
    </div>
   </div>
   </div>
   {/*second grid start    */}
   <div className='flex pt-32'>
    <div>
  <h2 className='font-medium text-2xl pb-6 text-justify'>Medicines</h2>
   <div className='grid lg:grid-cols-[300px,1fr] gap-24 '>
   <div className='border border-gray-700 rounded-2xl grid shadow-lg  h-80'>
        <div className='flex justify-between'>
       <div className='ml-3'>
       <a href="#"> <Image
                className='rounded-2xl inline-block hover:opacity-80'
                src='/phone1.PNG'
        width={280} 
        height={80} 
        alt='Phone1' />
           </a>
        </div>
        </div>
        <div className='flex'>
          <a href="#"> 
        <Image
                className=' hover:bg-gray-500 shadow-lg rounded-2xl ml-2 mb-3 h-36 inline-block hover:opacity-80'
                src='/phone2.PNG'
        width={140} 
        height={36} 
        alt='phone2' />
          </a>
        <div className='float-end '>
          <a href="#">
        <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/phone3.PNG'
        width={140} 
        height={36} 
        alt='phone3' />
        </a>
        </div>
        </div>
        </div>
    </div>
   </div>
   <div>

   <h2 className='font-medium text-2xl pb-6 text-justify'>Stationary</h2>
     <div className='grid lg:grid-cols-[300px,1fr] gap-24'>
     <div className='border border-gray-700 rounded-2xl grid shadow-lg  h-80'>
      <div className='flex'>
      <a href='/'>  <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/ph1.PNG'
        width={140} 
        height={36} 
        alt='phones' />
        </a>
        <a href='/'>
                <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/ph2.PNG'
        width={140} 
        height={36} 
        alt='phones' />
        </a>
        </div>
        <div className='flex'>
        <a href="/">
        <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/ph3.PNG'
        width={140} 
        height={36} 
        alt='phones' />
        </a>
        <a href="/">
                <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/ph4.PNG'
        width={140} 
        height={36} 
        alt='phones' />
        </a>
        </div>
        </div>
    </div>
   </div>  
   <div>
   <h2 className='font-medium text-2xl pb-6 text-justify'>Cleaning Tools</h2>
   <div className='grid lg:grid-cols-[300px,1fr] gap-24'>
     <div className='border border-gray-700 rounded-2xl grid shadow-lg  h-80'>
      <a href="/beauty">
        <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-80 inline-block hover:opacity-80'
                src='/art.PNG' 
        width={280} 
        height={80} 
        alt='art image' />
        </a>
    </div>
    </div>
   </div>
   <div>
   <h2 className='font-medium text-2xl pb-6 text-justify'>Groceries</h2>
      <div className='grid lg:grid-cols-[300px,1fr] gap-24'>
     <div className='border border-gray-700 rounded-2xl grid shadow-lg  h-80'>
      <a href="#">
        <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/agri.PNG' 
        width={280} 
        height={36} 
        alt='agriculture' />
        </a>
        <a href="#">
    <Image
                className=' hover:bg-gray-500 shadow-lg rounded-2xl ml-2 mb-3 h-36 inline-block hover:opacity-80'
                src='/agri1.PNG'
        width={280} 
        height={36} 
        alt='agriculture' />
        </a>
    </div>
    </div>
   </div>
   </div>
   {/* second grid end */}
  
   <div> 
      <img src="/discount.PNG" alt="discount" className=' pt-16 -ml-1 w-full'/>  
  </div>
  {/*3th grid start */}
  <div className='flex pt-32'>
    <div>
  <h2 className='font-medium text-2xl pb-6 text-justify'>Electronics</h2>
   <div className='grid lg:grid-cols-[300px,1fr] gap-24 '>
   <div className='border border-gray-700 rounded-2xl grid shadow-lg  h-80'>
        <div className='flex justify-between'>
       <div className='ml-3'>
       <a href="#"> <Image
                className='rounded-2xl inline-block hover:opacity-80'
                src='/electronics.PNG'
        width={280} 
        height={80} 
        alt='Phone1' />
           </a>
        </div>
        </div>
        <div className='flex'>
          <a href="#"> 
        <Image
                className=' hover:bg-gray-500 shadow-lg rounded-2xl ml-2 mb-3 h-36 inline-block hover:opacity-80'
                src='/electronics1.PNG'
        width={140} 
        height={36} 
        alt='phone2' />
          </a>
        <div className='float-end '>
          <a href="#">
        <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/electronics2.PNG'
        width={140} 
        height={36} 
        alt='phone3' />
        </a>
        </div>
        </div>
        </div>
    </div>
   </div>
   <div>

   <h2 className='font-medium text-2xl pb-6 text-justify'>Shoes</h2>
     <div className='grid lg:grid-cols-[300px,1fr] gap-24'>
     <div className='border border-gray-700 rounded-2xl grid shadow-lg  h-80'>
      <div className='flex'>
      <a href='/'>  <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/shoes1.PNG'
        width={140} 
        height={36} 
        alt='phones' />
        </a>
        <a href='/'>
                <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/shoes2.PNG'
        width={140} 
        height={36} 
        alt='phones' />
        </a>
        </div>
        <div className='flex'>
        <a href="/">
        <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/shoes3.PNG'
        width={140} 
        height={36} 
        alt='phones' />
        </a>
        <a href="/">
                <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/shoes4.PNG'
        width={140} 
        height={36} 
        alt='phones' />
        </a>
        </div>
        </div>
    </div>
   </div>  
   <div>
   <h2 className='font-medium text-2xl pb-6 text-justify'>Furniture</h2>
   <div className='grid lg:grid-cols-[300px,1fr] gap-24'>
     <div className='border border-gray-700 rounded-2xl grid shadow-lg  h-80'>
      <a href="#">
        <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-80 inline-block hover:opacity-80'
                src='/furniture.PNG' 
        width={280} 
        height={80} 
        alt='art image' />
        </a>
    </div>
    </div>
   </div>
   <div>
   <h2 className='font-medium text-2xl pb-6 text-justify'>Jeweleries</h2>
      <div className='grid lg:grid-cols-[300px,1fr] gap-24'>
     <div className='border border-gray-700 rounded-2xl grid shadow-lg  h-80'>
      <a href="#">
        <Image
                className=' hover:bg-gray-500 shadow-lg ml-1 rounded-2xl h-36 inline-block hover:opacity-80'
                src='/jew1.PNG' 
        width={280} 
        height={36} 
        alt='agriculture' />
        </a>
        <a href="#">
    <Image
                className=' hover:bg-gray-500 shadow-lg rounded-2xl ml-2 mb-3 h-36 inline-block hover:opacity-80'
                src='/jew2.PNG'
        width={280} 
        height={36} 
        alt='agriculture' />
        </a>
    </div>
    </div>
   </div>
   </div>
   {/*3th grid end */}
   <div> 
      <img src="/order.PNG" alt="discount" className=' pt-16 -ml-1 w-full'/>  
  </div>
  {/*4th grid start */}
<div className='container pt-16 pb-10'>
<Slider {...settings}>
        <div> 
                  
         <img src="/caru1.PNG" alt="slider 1" />
        </div>
        <div>
        <img src="/caru2.PNG" alt="slider 1" />
        </div>
        <div>
         <img src="/caru3.PNG" alt="slider 1" />
        </div>
        <div>
         <img src="/caru4.PNG" alt="slider 1" />
        </div>
        <div>
        <img src="/caru5.PNG" alt="slider 1" />
        </div>
        <div>
        <img src="/caru6.PNG" alt="slider 1" />
        </div>
        <div>
        <img src="/caru7.PNG" alt="slider 1" />
        </div>
        <div>
         <img src="/caru8.PNG" alt="slider 1" />
        </div>
        <div>
         <img src="/caru9.PNG" alt="slider 1" />
        </div>
        <div>
          <img src="/caru10.PNG" alt="slider 1" />
        </div>
        <div>
         <img src="/caru11.PNG" alt="slider 1" />
        </div>
        <div>
          <img src="/caru12.PNG" alt="slider 1" />
        </div>
      </Slider>
    </div>
 {/* carusel slider ends*/}
</div>

  )
}

export default GridHome