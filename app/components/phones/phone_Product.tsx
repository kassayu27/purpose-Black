import React from 'react';
import PhoneCard from './phones_Card';
import './phone.css'
import './phone.css';
import { Input } from 'antd';
const productsData = [
  {
    key: 1,
    img: '/dt_ph1.PNG',
    title: 'IPHONE 12,128',
    desc: 'Apple iphone 11, US versition,128 GB, Black-Unlocked(Renewed); Typical',
    price: '70,000',
    rating: 5,
    link: '/phone-detail',
  },
  {
    key: 2,
    img: '/dt_ph2.PNG',
    title: 'Redmi Note 13 Pro 5G',
    desc: 'is equped with the flagship-level 200mp main camera and support',
    price: '52,000',
    rating: 5,
    link: '/phone-detail1',

  },
  {
    key: 3,
    img: '/dt_ph3.PNG',
    title: 'Samsung Galaxy Note 20',
    desc: '(Snapdragon) Camera test: Great Ultra-wide and portraits',
    price: '52,000',
    rating: 5,
    link: '/phone-detail2',

  },
  {
    key: 4,
    img: '/dt_ph4.PNG',
    title: 'Tecno Spark 9T ',
    desc: 'Android smartphone, announced JUN 2022.5000mAh battry 128GB',
    price: '20,000',
    rating: 2,
    link: '/phone-detail3',
  },
  {
    key: 5,
    img: '/dt_ph5.PNG',
    title: 'Huawei Mate 60 Pro +',
    desc: 'Type LTPO OLED,1B colors; Size,6.82 inchis, 114,4 cm2 (~88.5% screen)',
    price: '70,000',
    rating: 4,
    link: '/phone-detail4',
  },
  {
    key: 6,
    img: '/dt_ph1.PNG',
    title: 'IPHONE 12,128',
    desc: 'Apple iphone 11, US versition,128 GB, Black-Unlocked(Renewed); Typical',
    price: '70,000',
    rating: 5,
    link: '/phone-detail5',

  },
  {
    key: 7,
    img: '/dt_ph2.PNG',
    title: 'Redmi Note 13 Pro 5G',
    desc: 'is equped with the flagship-level 200mp main camera and support',
    price: '52,000',
    rating: 5,
    link: '/phone-detail6',

  },
  {
    key: 8,
    img: '/dt_ph3.PNG',
    title: 'Samsung Galaxy Note 20',
    desc: '(Snapdragon) Camera test: Great Ultra-wide and portraits',
    price: '52,000',
    rating: 5,
    link: '/phone-detail7',

  },
  {
    key: 9,
    img: '/dt_ph4.PNG',
    title: 'Tecno Spark 9T ',
    desc: 'Android smartphone, announced JUN 2022.5000mAh battry 128GB',
    price: '20,000',
    rating: 2,
    link: '/phone-detail8',


  },
  {
    key: 10,
    img: '/dt_ph5.PNG',
    title: 'Huawei Mate 60 Pro +',
    desc: 'Type LTPO OLED,1B colors; Size,6.82 inchis, 114,4 cm2 (~88.5% screen)',
    price: '70,000',
    rating: 4,
    link: '/phone-detail9',

  },
  {
    key: 11,
    img: '/dt_ph1.PNG',
    title: 'IPHONE 12,128',
    desc: 'Apple iphone 11, US versition,128 GB, Black-Unlocked(Renewed); Typical',
    price: '70,000',
    rating: 5,
    link: '/phone-detail10',

  },
  {
    key: 12,
    img: '/dt_ph2.PNG',
    title: 'Redmi Note 13 Pro 5G',
    desc: 'is equped with the flagship-level 200mp main camera and support',
    price: '52,000',
    rating: 5,
    link: '/phone-detail11',

  },
];

const PhoneDetail = () => {
  return (
    <div className='container  bg-gray-50  '>
      <div className='flex'>
        <div className='sidebar'>
          <h1 className='pt-6 text-xl'>Catagory</h1>
          <ul>
            <a href="#">  <li>Price</li>  </a>
            <a href="#"> <li>Color</li>  </a>
            <a href="#"> <li>rate</li>  </a>
          </ul>
        </div>
        <div>
          <div className='recommended-title'>
            <h1 className='pb-3'>Recommended</h1>
            <div className='flex gap-16'>
              <div className='recommended-flex'>
                <button className='btns'>All Products</button>
                <button className='btns'>Samsung</button>
                <button className='btns'>Tecno</button>
                <button className='btns'>Huawei</button>
                <button className='btns'>Nokia</button>
                <button className='btns'>One Plus</button>
                <button className='btns'>Motorola</button>
                <button className='btns'>Iphone</button>
              </div>
              <div>
                <Input placeholder="Search products" className='h-10' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='grid  xl:grid-cols-4 xl:gap-x-2 xl:gap-y-10 w-5/6 ml-auto'>
        {productsData.map((item, index) => (
          <PhoneCard
            key={index}
            img={item.img}
            title={item.title}
            desc={item.desc}
            rating={item.rating}
            price={item.price}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
};

export default PhoneDetail;
