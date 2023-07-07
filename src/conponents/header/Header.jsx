import React from 'react'
import icons from '../../asset/icons'
import Cart from './Cart'
import User from './User'
import { Link } from 'react-router-dom'
import path from '../../ultis/path'



const header = () => {
  const  {AiOutlineRight} = icons
  return (
    <div className='bg-gradient-to-r from-orange-500 to-orange-600 flex justify-between px-[20px] py-[10px] items-center text-gray-50'>
      <div className='flex w-[40%]'>
        <span className='mr-[20px] cursor-pointer hover:text-yellow-200 hover:border-b-2 pb-1 hover:border-yellow-200 '><Link to={path.HOME}>Trang Chủ</Link> </span>
        <span className='mr-[20px] cursor-pointer hover:text-yellow-200 hover:border-b-2 pb-1 hover:border-yellow-200 '>Sản phẩm</span>
        <span className='cursor-pointer hover:text-yellow-200 hover:border-b-2 pb-1 hover:border-yellow-200'><Link to={path.ABOUT_US}>Về chúng tôi</Link></span>
      </div>
      <div className='flex flex-col justify-center items-center w-[20%]'>
        <h3 className='text-[22px]'>LINH KIỆN ĐIỆN TỬ</h3>
        <span className='text-yellow-200 text-[12px]'>NGUYEN MANH TUAN</span>
      </div>
      <div className='flex justify-end w-[40%]'>
        <div className='flex mx-5 items-center'>
          <Cart></Cart>
        </div>
        <div className='flex mx-4 items-center'>
          <User></User>
        </div>
      </div>
    </div>
  )
}

export default header