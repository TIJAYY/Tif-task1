import React, { useEffect } from 'react'
import pizza from '../../assets/pizza.png'
import spoon from '../../assets/spoon.png'
import logo from '../../assets/logo.png'
import one from '../../assets/one.png'
import two from '../../assets/two.png'
import three from '../../assets/three.png'
import four from '../../assets/four.png'
import five from '../../assets/five.png'
import six from '../../assets/six.png'
import './style.css'
import insta from '../../assets/insta.png'
import x from '../../assets/x.png'
import fb from '../../assets/fb.png'
import Carousel from '../../components/carousel/Carousel'

const Homepage = () => {

   const carouselData=[
      {
         imageSrc:one,
         heading: 'Grilled Tomatoes at Home',
         text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      },
      {
         imageSrc:two,
         heading: 'Snacks for Travel ',
         text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      },
      {
         imageSrc:three,
         heading: 'Post-workout Recipes',
         text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      }, 
      {
         imageSrc:four,
         heading: 'How To Grill Corn',
         text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      },
      {
         imageSrc:five,
         heading: 'Crunchwrap Supreme',
         text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      },
      {
         imageSrc:six,
         heading: 'Brocolly Cheese Soup',
         text: "PLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard..."
      },
     
   ];
 
   
   
  return (
    <>
    <div className="firstContainer">
        <div className="content">
             <div className="logo">
                <img src={logo}></img>
             </div>
             <div className="heading">
                Discover the <span className='redText'>Best</span> Food and Drinks
             </div>
             <div className="text">
                Naturally made Healthcare Products for the better care & support of your body
             </div>
             <button className="button">
                Explore Now!
             </button>
        </div>
        <div className="img1">
            <div className="mainImg">
            <img className='pizza' src={pizza}></img>
            </div>
            <div className="svg">
            <svg className='svg' width="752" height="839" viewBox="0 0 752 839" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z" fill="#E23744"/>
</svg>
            </div>

        <button className='button two'>Get in Touch</button>
        </div>
    </div>
    <div className="secondContainer">
      <div className="imgTwo">
         <img src={spoon} className='spoon'></img>
      </div>
      <div className="aboutUs">
         <div className="headingTwo">
            About Us
         </div>
         <div className="contentTwo">
         Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. t has survived not only five centuries.         </div>
         <button className="button Three">
         Read More
      </button>  
      </div>
  
    </div>
    <div className="carousel">
      <div className="headingThree">
         Latest Articles
       
      </div>
      <div className="carouselMenu">
         <Carousel carouselData={carouselData}></Carousel>
       
      </div>
    </div>
    <div className="footer">
      <div className="footerLogo">
      <img className='footerImg' src={logo}></img>
      </div>
                 
      

    <div className="contactInformation">
      <h1 className='footerH1'>Contact Us</h1>
      <ul className='footerList'>
         <li>
         Lorem Ipsum  Pvt Ltd.5/1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434
         </li>
         <li>
            example2020@gmail.com
         </li>
         <li>
            (904)443-0343  
         </li>
      </ul>
    </div>

    <div className="more">
      <h1 className='footerH1'>More</h1>
     <ul className="footerList">
      <li>About Us</li>
      <li>Products</li>
      <li>Carrer</li>
      <li>Contact Us</li>
     </ul>
    </div>

    <div className="socialLinks">
   <h1 className='footerH1 one'>Social Links</h1>
   <div className="icons">
   <img className='socialIcons' src={insta}></img>
   <img className='socialIcons' src={x}></img>
   <img className='socialIcons' src={fb}></img>
   <span className="copywrite">
    © 2022 Food Truck Example
    </span>
   </div>


    </div>
 
    </div>
    </>
  )
}

export default Homepage