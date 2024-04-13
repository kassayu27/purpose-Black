import React from 'react';
import BeautyCard from './beauty_card';
const productsData = [
  {
    img: '/bdetail1.PNG',
    title: 'EAU THERMALE-WATER CREAM',
    desc: 'Nourlishing yet ultra-light.the waterCraemdeliciously melts into the skin',
    price: '400',
    rating: 5,
    link: '/beauty-detail1',
  },
  {
    img: '/bdetail2.PNG',
    title: 'jergens Sweet Citrus Body Butter',
    desc: 'Boody and hand lotion,Moisturizer, 7 Ounce Lotion with Essential Oil',
    price: '600',
    rating: 5,
    link: '/beauty-detail2',

  },
  {
    img: '/bdetail3.PNG',
    title: 'Dior BACKSTAGE EYESHAdow',
    desc: 'Palette-Roosewood Neutrals',
    price: '550',
    rating: 5,
    link: '/beauty-detail3',

  },
  {
    img: '/bdetail4.PNG',
    title: 'Fenty beauty Gloss',
    desc: 'Bomb Universal Lip Luminzer in Champ Steam Fantasy',
    price: '1,500',
    rating: 5,
    link: '/beauty-detail4',


  },
  {
    img: '/bdetail1.PNG',
    title: 'EAU THERMALE-WATER CREAM',
    desc: 'Nourlishing yet ultra-light.the waterCraemdeliciously melts into the skin',
    price: '400',
    rating: 5,
    link: '/beauty-detail5',

  },
  {
    img: '/bdetail2.PNG',
    title: 'jergens Sweet Citrus Body Butter',
    desc: 'Boody and hand lotion,Moisturizer, 7 Ounce Lotion with Essential Oil',
    price: '600',
    rating: 5,
    link: '/beauty-detail6',

  },
  {
    img: '/bdetail3.PNG',
    title: 'Dior BACKSTAGE EYESHAdow',
    desc: 'Palette-Roosewood Neutrals',
    price: '550',
    rating: 5,
    link: '/beauty-detail7',

  },
  {
    img: '/bdetail4.PNG',
    title: 'Fenty beauty Gloss',
    desc: 'Bomb Universal Lip Luminzer in Champ Steam Fantasy',
    price: '1,500',
    rating: 5,
    link: '/beauty-detail8',


  },
  {
    img: '/bdetail1.PNG',
    title: 'EAU THERMALE-WATER CREAM',
    desc: 'Nourlishing yet ultra-light.the waterCraemdeliciously melts into the skin',
    price: '400',
    rating: 5,
    link: '/beauty-detail9',

  },
  {
    img: '/bdetail2.PNG',
    title: 'jergens Sweet Citrus Body Butter',
    desc: 'Boody and hand lotion,Moisturizer, 7 Ounce Lotion with Essential Oil',
    price: '600',
    rating: 5,
    link: '/beauty-detail10',

  },
  {
    img: '/bdetail3.PNG',
    title: 'Dior BACKSTAGE EYESHAdow',
    desc: 'Palette-Roosewood Neutrals',
    price: '550',
    rating: 5,
    link: '/beauty-detail11',

  },
  {
    img: '/bdetail4.PNG',
    title: 'Fenty beauty Gloss',
    desc: 'Bomb Universal Lip Luminzer in Champ Steam Fantasy',
    price: '1,500',
    rating: 5,
    link: '/beauty-detail12',


  },
];

const BeautyDetail = () => {
  return (
    <div>
      <div className='container pt-16 bg-gray-50'>
        <div className='grid  xl:grid-cols-4 xl:gap-x-2 xl:gap-y-10'>
          {productsData.map((item, index) => (
            <BeautyCard 
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
    </div>
  );
};

export default BeautyDetail;
