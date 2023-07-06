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
      toast.warning('Đăng nhập của bạn đang gặp lỗi')
    }

  }

  return (
    
      <div className='flex flex-col mt-10 justify-center items-center'>
        <ToastContainer />
        <div className='w-[250px] p-5 h-[300px] bg-gray-800 text-gray-300'>
          <div>
            <span>Tên đăng nhập : </span>
            <input className='text-black px-2' type='text'
            onChange={(e) => handleLoginUserName(e)}
            ></input>
          </div>
          <div>
            <span>Mật khẩu : </span>
            <input className='text-black px-2'  type='password'
            onChange={(e) => handleLoginPassword(e)}
            ></input>
          </div>
          <div onClick={() => handleLogin()}><Button title='Đăng nhập'></Button></div>
        </div>
        <Link to={path.REGISTER}>Đăng kí tài khoản</Link>
      </div>
  )
}

export default Login