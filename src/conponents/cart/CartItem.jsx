import React from 'react'
import CustomScroll from 'react-custom-scroll';
const CartItem = ({DataPrdInCart}) => {
    console.log('DataPrdInCart', DataPrdInCart)
  return (
    <CustomScroll>
    <div className='mt-4 scroll-auto'>
        {
            
            DataPrdInCart.map((item, index) => (
                <div key={index} className='mb-5 h-full scroll-m-0'>
                    <div><img className='w-[100px] rounded-md' src={item.img} alt={item.name}></img></div>
                </div>
            ))
        }
    </div>
    </CustomScroll>
  )
}

export default CartItem