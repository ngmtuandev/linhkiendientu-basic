import React from 'react'
import icons from '../../asset/icons'
import Cart from './Cart'
import User from './User'
import { Link } from 'react-router-dom'
import path from '../../ultis/path'

const header = () => {
  const  {AiOutlineRight, AiOutlineUser} = icons
  return (
    <div className='flex justify-between px-[20px] py-[10px] items-center bg-gray-800 text-gray-50'>
      <div className='flex w-[40%]'>
        <span className='mr-[20px] cursor-pointer hover:text-green-300 '><Link to={path.HOME}>Trang Chủ</Link> </span>
        <span className='mr-[20px] cursor-pointer hover:text-green-300 '>Sản phẩm</span>
        <span className='cursor-pointer hover:text-green-300 '>Về chúng tôi</span>
      </div>
      <div className='flex flex-col justify-center items-center w-[20%]'>
        <h3 className='text-[22px]'>Linh Kiện Điện Tử</h3>
        <span className='text-gray-300 text-[12px]'>NGUYEN MANH TUAN</span>
      </div>
      <div className='flex justify-end w-[40%]'>
        <div className='flex mx-4 items-center'>
          <input placeholder='Tìm kiếm sản phẩm' className='border-none outline-none px-2 rounded-md 
          placeholder:text-[13px] flex items-center text-black mr-1'></input>
          <span><AiOutlineRight className='w-6 h-6 rounded-md hover:text-gray-50 cursor-pointer 
          text-gray-700 bg-white hover:bg-green-300'></AiOutlineRight></span>
        </div>
        <div className='flex mx-4 items-center'>
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