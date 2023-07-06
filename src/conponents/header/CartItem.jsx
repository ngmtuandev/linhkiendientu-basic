import React, {useSelector} from 'react'

const CartItem = () => {
  const {dataPrd} = useSelector(state => state.cart)

  console.log('data cart', dataPrd)
  return (
    <div>
      <div>
      </div>
    </div>
  )
}

export default CartItem