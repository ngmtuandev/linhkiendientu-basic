import React from 'react'
import Slider from "react-slick";
import {slide}  from '../../asset/dataweb/data'

const SliderMain = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
  return (
    <div className='h-170px'>
        <Slider {...settings}>
            {
                slide.map((item, index) => (
                    <div key={index} className='p-5'>
                        <img className='h-full' src={item.image} alt="" />
                    </div>
                ))
            }
        </Slider>
    </div>
  )
}

export default SliderMain