import React, { useEffect, useState } from 'react'
import icons from '../../asset/icons'
import CartItem  from '../cart/CartItem'
import { useSelector } from 'react-redux'
import CustomScroll from 'react-custom-scroll';
const Cart = () => {
  const  {BsFillCartFill} = icons
  const [ stateCart, setStateCart] = useState(false)

  const {totalPrdInCart} = useSelector(state => state.cart)
  console.log(totalPrdInCart)

  const handleCart = () => {
    setStateCart(!stateCart)
  }
  const dataLocal = JSON.parse(localStorage.getItem("persist:product"))
  // console.log(JSON.parse(dataLocal.dataPrd))
  const DataPrdInCart = JSON.parse(dataLocal.dataPrd)
  // DataPrdInCart.map((item) => {
  //   console.log(item)
  // })


  return (
    
    <div className=''>
        <div className='flex'>
            <BsFillCartFill onClick={() => handleCart()} size={23} className='mr-1 cursor-pointer '></BsFillCartFill>
            <span>{totalPrdInCart}</span>
        </div>
        {
            stateCart && (
                <div className='w-[400px] h-[400px] absolute right-[0px]'>
                <div className='bg-gray-700 p-5'>
                  <h3>Đơn hàng của bạn</h3>
                  <CartItem DataPrdInCart = {DataPrdInCart}></CartItem>
                </div>
            </div>
            )
        }
        
    </div>
  )
}

export default Cart