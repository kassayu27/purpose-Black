import Image from 'next/image'
import React from 'react'

const Meet_and_meetProduct = () => {
  return (
    <div className='container pt-16 grid-cols-2 flex'>
    <div className='grid lg:grid-cols-[300px,1fr] gap-24'>
     <div className='border border-gray-300 rounded-2xl grid place-items-center
     p-6 '>
         <Image
         className='rounded-full inline-block'
         src='/testimonial.PNG' 
         width={80} 
         height={80} 
         alt='Testimonial Image' />
         <p>CEO and Founder</p>
         <Image
         className='rounded-full inline-block'
         src='/balanced2.PNG' 
         width={80} 
         height={80} 
         alt='Testimonial Image' />
         <p className='max-w-[200px] text-gray-500'>
         Wolaita Sodo is decided to be the hub of economic excellence of Africa and the globe
         </p>
 
     </div>
    </div>
 </div>
  )
}

export default Meet_and_meetProduct