'use client';
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { dot } from 'node:test/reporters';

const Animate = () => {
  const settings = {
    dot:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: false,
  };

  const slideData = [
    {
      id: 0,
      img: '/banner1.PNG',
      title: 'trending item',
    },
    {
      id: 1,
      img: '/banner2.PNG',
      title: 'trending item',
    },
    {
      id: 2,
      img: '/banner3.PNG',
      title: 'trending item',
    },
  ];

  return (
    <div>
      <div className='container pt-6 lg:pt-0'>
        <Slider {...settings}>
          {slideData.map((item) => (
            <div key={item.id}>
              <img
                src={item.img}
                alt={item.title}
                style={{ width: '100%', height: 'auto' }} 
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Animate;
