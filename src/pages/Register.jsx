import React, {useState} from 'react'
import Button from '../conponents/Button'
import { useDispatch, useSelector } from 'react-redux'
import {RegisterUser} from '../store/action/loginAction'
import { ToastContainer, toast } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import path from '.././ultis/path'

const Register = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState(null)
  const [checkPass, setCheckpass] = useState(null)
  const [name, setName] = useState('')

  const dispatch = useDispatch()

  // const {dataRegister} = useSelector(state => state.user)
  // console.log(dataRegister)

  const navigate = useNavigate()


  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleCheckPass = (e) => {    
    setCheckpass(e.target.value)
  }

  const handleName = (e) => {    
    setName(e.target.value)
  }

  const handleRegister = () => {
    
      const test = password === checkPass ? 1 : 0
      if (+test === 1) {
        toast.success('Bạn đã tạo tài khoản thành công')
        dispatch(RegisterUser({
          name: name,
          userName: userName,
          password: password,
          checkPass: checkPass
        }))
        // navigate(path.LOGIN)
      }
      else {
        toast.error('Đăng kí thất bại')
      }
  }

  return (
    <div className="h-[540px] shadow-slate-950	 justify-center items-center bg-[url('https://cdn.pixabay.com/photo/2016/11/10/05/09/bitcoin-1813503_1280.jpg')] ">
        <ToastContainer></ToastContainer>
        <div className='flex flex-col justify-center items-center'>
        <div className='w-[330px] flex flex-col mt-[35px] px-5 h-[450px] rounded-md
        bg-gradient-to-r from-orange-600 to-orange-400 text-gray-300 pt-10 shadow-inherit	'>
          <div className='flex flex-col items-center text-gray-100 mb-3'>
            <span>Tên tài khoản</span>
            <input className='text-black px-2 w-[220px] outline-none rounded-md text-[12] mt-2' type='text'
            onChange={(e) => handleName(e) }
            ></input>
          </div>
          <div className='flex flex-col items-center text-gray-100 mb-3'>
            <span>Tên đăng nhập</span>
            <input className='text-black px-2 w-[220px] outline-none rounded-md text-[12] mt-2' type='text'
            onChange={(e) => handleUserName(e) }
            ></input>
          </div>
          <div className='flex flex-col items-center text-gray-100 mb-3'>
            <span>Mật khẩu : </span>
            <input className='text-black px-2 w-[220px] outline-none rounded-md text-[12] mt-2'  type='password'
            onChange={(e) => handlePassword(e) }
            ></input>
          </div>
          <div className='flex flex-col items-center text-gray-100 mb-3'>
            <span>Xác nhận mật khẩu : </span>
            <input className='text-black px-2 w-[220px] outline-none rounded-md text-[12] mt-2'  type='password'
            onChange={(e) => handleCheckPass(e) }
            ></input>
          </div>
          <div className='flex justify-center' onClick={() => handleRegister()}><Button title='Tạo tài khoản'></Button></div>
          <div className='flex mt-4 justify-center text-gray-50 hover:text-gray-900'>
            <Link to={path.LOGIN}>Quay lại đăng nhập</Link></div>
        </div>
      </div>
    </div>
  )
}

export default Register