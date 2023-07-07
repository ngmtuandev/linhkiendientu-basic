import React from 'react'
import CustomScroll from 'react-custom-scroll';
const CartItem = ({DataPrdInCart}) => {
    console.log('DataPrdInCart', DataPrdInCart)
  return (
    <CustomScroll>
    <div className=' h-[450px] mt-10'>
            <div className='mb-5 items-center grid grid-cols-3 scroll-m-0 '>
                <div className='flex ml-[40px]'>Hình ảnh</div>
                <div>Tên sản phẩm</div>
                <div className='flex justify-end mr-[100px]'>Giá</div>
            </div>
        {
            
            DataPrdInCart?.map((item, index) => (
                <div key={index} className='mb-5 items-center grid grid-cols-3 scroll-m-0 '>
                    <div className='flex ml-[40px]'><img className='w-[100px] rounded-md' src={item.img} alt={item.name}></img></div>
                    <div>{item.name}</div>
                    <div className='flex justify-end mr-[100px]'>{item.price}</div>
                </div>
            ))
        }
    </div>
    </CustomScroll>
  )
}

export default CartItem