import React from 'react'
import SliderMain from '../conponents/main/Slider'
import Category from '../conponents/category/Category'
import Product from '../conponents/products/Product'

const Home = () => {
  return (
    <div className=''>
      <SliderMain></SliderMain>
      <Category></Category>
      <Product></Product>
    </div>
  )
}

export default Home