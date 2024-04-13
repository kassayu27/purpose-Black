'use client';
import React from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PhoneDetail from '../components/phones/phone_Product'

const Phones = () => {
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
    <h2 className='text-4xl pb-2 font-black ml-96'>Phones</h2>
    </div>
<Slider {...settings}>
        <div>   
          <img src="/ph_hua.PNG" alt="slider 1" />
          <h1 className='ml-9 font-bold'>Huawei</h1>
        </div>
        <div>
        <img src="/ph_ipo.PNG" alt="slider 1" />
        <h1 className='ml-9 font-bold'>Iphone</h1>
        </div>
        <div>
        <img src="/ph_mot.PNG" alt="slider 1" />
        <h1 className='ml-9 font-bold'>Motorola</h1>
        </div>
        <div>
        <img src="/ph_nokia.PNG" alt="slider 1" />
        <h1 className='ml-9 font-bold'>Nokia</h1>
        </div>
        <div>
        <img src="/ph_one.PNG" alt="slider 1" />
        <h1 className='ml-9 font-bold'>One plus</h1>
        </div>
        <div>
        <img src="/ph_sam.PNG" alt="slider 1" />
        <h1 className='ml-9 font-bold'>samsung</h1>
        </div>
        <div>
        <img src="/ph_tec.PNG" alt="slider 1" />
        <h1 className='ml-9 font-bold'>Techno</h1>
        </div>
        <div>
        <img src="/ph_xia.PNG" alt="slider 1" />
        <h1 className='ml-9 font-bold'>Xiaomi</h1>
        </div>
      </Slider>
    </div>
    <PhoneDetail />
    </div>
  )
}

export default Phones