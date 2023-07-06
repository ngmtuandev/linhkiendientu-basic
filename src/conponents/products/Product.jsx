import React, {memo} from 'react'
import {product} from '../../asset/dataweb/data'
import icon from '../../asset/icons'
import { Link } from 'react-router-dom'
const Product = () => {
  const {FaCartPlus} = icon
  return (
    <div className='p-[20px] mt-10'>
      <h3 className='text-[24px] font-medium mb-5'>Sản phẩm của chúng tôi</h3>
      <div className='grid grid-cols-4 gap-9'>
        {
          product.map((item) => (
          <Link key={item.id} to={`san-pham/${item.id}`}>
            <div  className='mb-8'>
              <div className='relative group/item'>
                <img src={item.cover} alt='product' className=''></img>
                <div className='group/edit absolute hidden cursor-pointer group-hover/item:block top-0 
                w-[100%] h-[100%] bg-[rgba(72,72,72,0.6)]'>
                  <FaCartPlus className='mt-[35%] ml-[50%] translate-x-[-50%]
                  text-gray-50
                  ' size={80}></FaCartPlus>
                </div>
              </div>
              <div className='flex flex-col mt-3'>
                <span>{item.name}</span>
                <span className='font-bold'>{item.price} VNĐ</span>
              </div>
            </div>
          </Link>
          ))
        }
      </div>
    </div>
  )
}

export default memo(Product)