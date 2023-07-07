import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import path from '../ultis/path'
import Button from '../conponents/Button'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import {checkLogin} from '../store/action/loginAction'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState(null)
  const {dataRegister} = useSelector(state => state.user)
  const navigate = useNavigate()
  const handleLoginPassword = (e) => {
    setPassword(e.target.value)
  }

  // console.log(userName)

  const dispatch = useDispatch()

  const handleLoginUserName = (e) => {
    setUserName(e.target.value)
  }


  const handleLogin = () => {
    // console.log('username', userName)
    // console.log('dataRegister', dataRegister.userName)
    const checkUserName = dataRegister.userName === userName
    const checkPass = dataRegister.password === password

    if (checkUserName && checkPass)
    {
      toast.success('Đăng nhập thành công')
      dispatch(checkLogin(true))
      navigate('/')
    }

    else {
      dispatch(checkLogin(false))
      toast.error('Đăng nhập của bạn đang gặp lỗi')
    }

  }

  return (
      <div className="flex h-[540px] shadow-slate-950	 justify-center items-center bg-[url('https://cdn.pixabay.com/photo/2016/11/10/05/09/bitcoin-1813503_1280.jpg')] ">
        <ToastContainer />
        <div className='w-[250px] rounded-md relative p-5 h-[300px] flex justify-center
        bg-gradient-to-r from-orange-600 to-orange-400 text-gray-300 pt-10 shadow-inherit	'>
          <img className='absolute top-[-55px] bg-gradient-to-r from-orange-300 to-orange-400 w-[80px] bg-gray-400 rounded p-2'
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/User_font_awesome.svg/2048px-User_font_awesome.svg.png' alt=''></img>
          <form action="">
          <div className='flex flex-col'>
            <span className='flex justify-center mb-2 text-gray-50'>Tên đăng nhập</span>
            <input className='text-black px-2 w-[220px] outline-none rounded-md text-[12] ' type='text'
            onChange={(e) => handleLoginUserName(e)}
            ></input>
          </div>
          <div className='mt-4'>
            <span className='flex justify-center mb-2 text-gray-50'>Mật khẩu</span>
            <input className='text-black px-2 w-[220px] outline-none rounded-md text-[12] '  type='password'
            onChange={(e) => handleLoginPassword(e)}
            ></input>
          </div>
          <div className='flex justify-center mb-4' onClick={() => handleLogin()}><Button title='Đăng nhập'></Button></div>
          <Link className='flex justify-center text-gray-50' to={path.REGISTER}>Đăng kí tài khoản</Link>
          </form>
          
        </div>
        
      </div>
  )
}

export default Login