import React, {memo, useMemo, useState} from 'react'
import { useParams } from 'react-router-dom'
import { product } from '../../asset/dataweb/data'
import {useDispatch, useSelector } from 'react-redux'
import Button from '../Button'
import {addCart} from '../../store/action/cartAction'
import {totalCart} from '../../store/action/cartAction'
import { ToastContainer, toast } from 'react-toastify';



const DetailProduct = () => {

  const [comment, setComment] = useState(null)
  const [collecttionComment, setCollecttionComment] = useState([])

  const  {id} = useParams()

  const {isLogin, dataRegister} = useSelector (state => state.user)

  const dataProduct = product.find((item) => +item.id === +id)
  const [amout, setAmout] = useState(1)
  const dispatch = useDispatch()
  const handleAddCart = () => {
    if (!isLogin)
    {
      toast.warning('Bạn phải đăng nhập để có thể mua hàng')
    }
    else {
      dispatch(addCart(dataProduct))
      dispatch(totalCart(+amout))
    }
  }

  const setAmoutPrd = (e) => {
    setAmout(e.target.value)
    // console.log(amout)
    
  }

  const handleComment = (e) => {
    setComment(e.target.value)
  }

  const handleAddComment = () => {
    
    if (!isLogin)
    { toast.warning('Phạn phải đăng nhập để đánh giá sản phẩm này')}
    else {
      setCollecttionComment([
      
        ...collecttionComment,
        {
          name: dataRegister.name,
          comment: comment
        },
        
      ])
      toast.success('Thêm vào giỏ hàng thành công')
    }
    
  }

  console.log(collecttionComment)


  return (
    <div className='px-[20px]'>
      <ToastContainer></ToastContainer>
        <div className='flex items-center'>
            <div className='w-[50%]'>
                <img src={dataProduct.cover} className='w-[550px]' alt='detail-product'></img>
            </div>
            <div className='w-[50%] flex flex-col'>
                <span className='uppercase font-bold text-[20px] mb-5'>{dataProduct.name}</span>
                <div className='flex flex-col'>
                  <h2 className='font-bold mb-3'>Mô tả sản phẩm: </h2>
                  <span className='text-red-500 font-semibold mb-2'>{dataProduct.price} VNĐ</span>
                  <span>{dataProduct.desc}</span>
                </div>
                <div className='mt-4 flex'>
                  <span className='font-semibold mr-3'>Số lương : </span>
                  <input className='w-[70px] px-2 rounded-md outline-none
                 border text-gray-800' type='number' onChange={(e) => setAmoutPrd(e)} ></input>
                </div>   
                
                <div onClick={() => handleAddCart()}><Button title = 'Thêm Vào Giỏ Hàng'></Button></div>
            </div>
        </div>
        <div>
          <h3 className='font-bold my-3 text-[20px]'>Đánh giá sản phẩm</h3>
          <textarea rows="8" cols="80" onChange={(e) => handleComment(e)} 
          className=' border border-slate-300 outline-none'></textarea>
          <div onClick={() => handleAddComment()}><Button title='Gửi đánh giá'></Button></div>
        </div>
        <div className='mt-7'>
          {
            collecttionComment.map(item => (
              <div className='flex flex-col mb-9'>
                <div className='flex'>
                  <img className='rounded-md w-[30px]'
                src='https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg' alt=''></img>
                  <span>{item.name}</span>
                </div>
                <span className='mt-5'>{item.comment}</span>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default DetailProduct