import React, { useEffect, useState } from 'react'
import icons from '../../asset/icons'
import CartItem  from '../cart/CartItem'
import { useSelector } from 'react-redux'


const Cart = () => {
  const  {BsFillCartFill} = icons
  const [ stateCart, setStateCart] = useState(false)

  const {totalPrdInCart} = useSelector(state => state.cart)
  const {isLogin} = useSelector(state => state.user)
  console.log('is login', isLogin)
  useEffect(() => {
    if (!isLogin) {
      setStateCart(false)
    }
  }, [isLogin])

  // console.log(totalPrdInCart)

  const handleCart = () => {
    setStateCart(!stateCart)
  }
  const dataLocal = JSON.parse(localStorage.getItem("persist:product"))

  // console.log(JSON.parse(dataLocal.dataPrd))
  const DataPrdInCart = JSON.parse(dataLocal.dataPrd)




  return (
    
    <div className=''>
        <div className='flex relative'>
            <BsFillCartFill onClick={() => handleCart()} size={23} className='mr-1 cursor-pointer '></BsFillCartFill>
            <span className='absolute bg-[rgb(47,44,44)] rounded-full px-[6px] top-[-7px] left-3
            text-[13px] flex items-center justify-center'>{ isLogin ? totalPrdInCart : 0}</span>
        </div>
        {
            isLogin && stateCart && (
                <div className='w-[100%] mt-6 absolute right-[0px] '>
                <div className='bg-gradient-to-r from-orange-500 to-orange-600 p-5'>
                  <h3 className='text-[27px] flex items-center justify-center'>ĐƠN HÀNG CỦA BẠN</h3>
                  <CartItem DataPrdInCart = {DataPrdInCart}></CartItem>
                </div>
            </div>
            )
        }

{
            //  stateCart && (
            //     <div className='w-[100%] mt-6 absolute right-[0px] '>
            //     <div className='bg-gradient-to-r from-orange-500 to-orange-600 p-5 flex flex-col items-center justify-center'>
            //       <img className='w-[60%]'
            //        src='https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4816550-4004141.png' alt=''></img>
            //     </div>
            // </div>
            // )
        }
        
    </div>
  )
}

export default Cart