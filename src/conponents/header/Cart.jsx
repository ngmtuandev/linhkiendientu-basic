import React, { useState } from 'react'
import icons from '../../asset/icons'
import CartItem from './CartItem'

const Cart = () => {
  const  {BsFillCartFill} = icons
  const [ stateCart, setStateCart] = useState(false)

  const handleCart = () => {
    setStateCart(!stateCart)
  }

  return (
    
    <div>
        <div className='flex'>
            <BsFillCartFill onClick={() => handleCart()} size={23} className='mr-1 cursor-pointer '></BsFillCartFill>
            <span>2</span>
        </div>
        {
            stateCart && (
                <div className='fixed'>
                    <h3>Đơn hàng của bạn</h3>
                <div>
                <CartItem></CartItem>
            </div>
        </div>
            )
        }
    </div>
  )
}

export default Cart