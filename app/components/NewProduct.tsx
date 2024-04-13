import React from 'react';
import ProductCard from './ProductCard';

const productsData = [
  {
    img: '/product1.PNG',
    title: 'purpose black',
    desc: 'kegeberew',
    rating: 2,
    price: '34.00',
  },
  {
    img: '/product2.PNG',
    title: 'purpose black',
    desc: 'kegeberew',
    rating: 3,
    price: '34.00',
  },
  {
    img: '/product3.PNG',
    title: 'purpose black',
    desc: 'kegeberew',
    rating: 3,
    price: '34.00',
  },
  {
    img: '/product4.PNG',
    title: 'purpose black',
    desc: 'kegeberew',
    rating: 2,
    price: '34.00',
  },
  {
    img: '/product1.PNG',
    title: 'purpose black',
    desc: 'kegeberew',
    rating: 2,
    price: '34.00',
  },
  {
    img: '/product2.PNG',
    title: 'purpose black',
    desc: 'kegeberew',
    rating: 3,
    price: '34.00',
  },
  {
    img: '/product3.PNG',
    title: 'purpose black',
    desc: 'kegeberew',
    rating: 3,
    price: '34.00',
  },
  {
    img: '/product4.PNG',
    title: 'purpose black',
    desc: 'kegeberew',
    rating: 2,
    price: '34.00',
  },
];

const NewProduct = () => {
  return (
    <div>
      <div className='container pt-16'>
        <h2 className='font-medium text-2xl pb-2'>New Products</h2>
        <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
          {productsData.map((item, index) => (
            <ProductCard
              key={index} 
              img={item.img}
              title={item.title}
              desc={item.desc}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewProduct;
