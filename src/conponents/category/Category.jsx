import React from 'react'
import {category} from '../../asset/dataweb/data'
const Category = () => {
  return (
    <div className='flex justify-center mt-20'>
      {
        category.map((item, index) => (
          <div key={index} className='mx-[20px] p-3 border-inherit'>
            <img className='w-[200px] hover:scale-[120%] transition-all' src={item.cover} alt='category'></img>
          </div>
        ))
      }
    </div>
  )
}

export default Category