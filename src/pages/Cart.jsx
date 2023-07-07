import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const dataLocal = JSON.parse(localStorage.getItem("persist:product"))
  const DataPrdInCart = JSON.parse(dataLocal.dataPrd)
  return (
    <div className='py-6'>
        <div>
            <div className='mb-5 mt-[20px] items-center grid grid-cols-3 scroll-m-0 '>
                <div className='flex ml-[40px]'>Hình ảnh</div>
                <div>Tên sản phẩm</div>
                <div className='flex justify-end mr-[100px]'>Giá</div>
            </div>
            {
                DataPrdInCart?.map(item => (
                    <div key={item.id} className='mb-5 items-center grid grid-cols-3 scroll-m-0 '>
                    <div className='flex ml-[40px]'><img className='w-[100px] rounded-md' src={item.img} alt={item.name}></img></div>
                    <div>{item.name}</div>
                    <div className='flex justify-end mr-[100px]'>{item.price}</div>
                </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cart