'use client';
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BeautyDetail from '../components/beauty_produt/beauty_detail'

const Beautypage = () => {
  const settings = {
    infinite: true,
    slidesToShow: 8,
    slidesToScroll: 2,
    autoplay: true,
    speed: 9000,
    autoplaySpeed:-100,
    cssEase: "linear"
  };
  return (
    <div>
<div className='container pt-10 pb-10 bg-gray-50'>
    <div className='mb-10'>
    <h2 className='text-4xl pb-2 font-black ml-96'>Beauty Products</h2>
    </div>
<Slider {...settings}>
        <div>   
          <img src="/beauty1.PNG" alt="slider 1" />
          <h1 className='ml-9 font-bold'>e.l.f</h1>
        </div>
        <div>
        <img src="/beauty2.PNG" alt="slider 1" />
        <h1 className='ml-9 font-bold'>eos</h1>
        </div>
        <div>
        <img src="/beauty3.PNG" alt="slider 1" />
        <h1 className='ml-9 font-bold'>Mark Antony</h1>
        </div>
        <div>
        <img src="/beauty4.PNG" alt="slider 1" />
        <h1 className='ml-9 font-bold'>Care VE</h1>
        </div>
        <div>
        <img src="/beauty5.PNG" alt="slider 1" />
        <h1 className='ml-9 font-bold'>Bliss</h1>
        </div>
        <div>
        <img src="/beauty6.PNG" alt="slider 1" />
        <h1 className='ml-9 font-bold'>Dove</h1>
        </div>
        <div>
        <img src="/beauty7.PNG" alt="slider 1" />
        <h1 className='ml-9 font-bold'>ATTITUDE</h1>
        </div>
        <div>
        <img src="/beauty3.PNG" alt="slider 1" />
        <h1 className='ml-9 font-bold'>Mark Antony</h1>
        </div>
      </Slider>
    </div>
    <BeautyDetail />
    </div>
  )
}

export default Beautypage