import React from 'react'

const AboutusPage = () => {
    const backgroundStyles = {
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        height: '20vw',
    };
  return (
     <div  className='container bg-gray-50'>
        <div>
      <img src="/bg_login.PNG" alt="pic "  style={backgroundStyles} />        
         </div>
         <div>
            <h1 className='text-center font-black pt-16 text-2xl'>
                About Us
            </h1>
            <p className='text-justify pt-6'>
            PurposeBlack is a brand new initiative launched in May 2020 by a group of more than 130 Black experts.
             PurposeBlack, as the name suggests, aims to economically address some of the most pressing issues confronting Black people worldwide. 
             The first model of this global initiative is being prepared for launch in Ethiopia. We are convinced that the new 
             approach represents an excellent opportunity for Ethiopia and Africa to be at the center of a massive international 
             enterprise that will benefit millions of Africans. The PurposeBlack Ethiopia initiative can be a multi-billion Birr 
             task so as to consist of the construction and release of a mega agro-processing complex, an e-commerce marketplace, 
             five hypermarkets, ten huge supermarkets, and a network of over a thousand retail and distribution stores throughout 
             Ethiopia.
            </p>
            <h1 className='text-center font-black pt-16 text-2xl'>
                Our Mission
            </h1>
            <p className='text-justify pt-6'>
            March 15th 2022 marked the opening of Purpose Black Ethiopia’s branch office in the vibrant city of Arba Minch. 
            We are prioritizing the opening of 14 agro-processing factories that focus their production mainly on banana, 
            mango, moringa and fish value added products. Currently, Purpose Black Ethiopia is in the process of opening a 
            traditional food processing factory (ባልትና) too.
            With the conducive environment for farming in Arba Minch, Purpose Black Ethiopia is also planning to introduce 
            commercial farming. This will be operated on the investment land, where Purpose Black Ethiopia owns with the generous 
            service of the zonal government and with other farm investors on franchised agricultural platform in Gamo Zone...
            </p>
         </div>
     </div>
  )
}

export default AboutusPage