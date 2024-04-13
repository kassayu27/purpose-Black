import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


interface propsType {
  img: string;
  title: string;
  desc: string;
  rating: number;
  price: string;
  link:string;
}

const PhoneCard: React.FC<propsType> = ({ img, title, desc, rating, price ,link}) => {
  const generateRating = (rating: number) => {
    switch (rating) {
      case 1:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 2:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 3:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
            <AiOutlineStar />
          </div>
        );
      case 4:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiOutlineStar />
          </div>
        );
      case 5:
        return (
          <div className='flex gap-1 text-[20px] text-[#FF9529]'>
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
            <AiFillStar />
          </div>
        );
    }
  };

  return (
    <div className='px-4 border border-gray-200 rounded-xl '>
      <div>
      <Link href={link}>
        <Image className='bg-gray' src={img} width={500} height={300} alt={title} />
        </Link>
      </div>
      <div className='space-y-2 py-2'>
        <p className='text-gray-500'>{desc}</p>
        <div>{generateRating(rating)}</div>
        <div className='font-bold align-middle'>{price} ETB
        </div>
      </div>
    </div>
  );
};

export default PhoneCard;
