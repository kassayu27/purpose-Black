import { Button } from 'antd'
import React from 'react'

const PhoneDescription = () => {
   
  return (
    <div className='container bg-gray-50'>
      <div className='flex pt-28'>
        <div>
          <h1>sample image</h1>
        </div>
        <div className='ml-44'>
          <img src="/dt_ph2.PNG" alt="Detail descrioption" />
        </div>
        <div className='ml-36'>
          <p className='text-center font-black  font-serif text-2xl'>Phone Detail description</p>
          <div>
            <p>
              This product is alovera
            </p>
          </div>
          <div className='pt-5'>
            <Button type='primary'>
              Add cart
            </Button>
          </div>
        </div>
      </div>
      {/*steps  start heare */}
    </div>
  )
}

export default PhoneDescription