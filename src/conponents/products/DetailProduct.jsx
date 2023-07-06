import React, {memo, useMemo, useState} from 'react'
import { useParams } from 'react-router-dom'
import { product } from '../../asset/dataweb/data'
import {useDispatch} from 'react-redux'
import Button from '../Button'
import {addCart} from '../../store/action/cartAction'
import {totalCart} from '../../store/action/cartAction'
import { ToastContainer, toast } from 'react-toastify';



const DetailProduct = () => {
  const  {id} = useParams()

  const dataProduct = product.find((item) => +item.id === +id)
  const [amout, setAmout] = useState(1)
  const dispatch = useDispatch()
  const handleAddCart = () => {
    dispatch(addCart(dataProduct))
    dispatch(totalCart(+amout))
  }
  const setAmoutPrd = (e) => {
    setAmout(e.target.value)
    // console.log(amout)
    toast.success('Thêm vào giỏ hàng thành công')
  }
  return (
    <div className='px-[20px]'>
      <ToastContainer></ToastContainer>
        <div className='flex items-center'>
            <div className='w-[50%]'>
                <img src={dataProduct.cover} alt='detail-product'></img>
            </div>
            <div className='w-[50%]'>
                <span>{dataProduct.desc}</span>   
                <input className='p-3 bg-slate-700 text-gray-50' type='number' onChange={(e) => setAmoutPrd(e)} ></input>
                <div onClick={() => handleAddCart()}><Button title = 'Thêm Vào Giỏ Hàng'></Button></div>
            </div>
        </div>
    </div>
  )
}

export default DetailProduct