import React, {useState} from 'react'
import Button from '../conponents/Button'
import { useDispatch, useSelector } from 'react-redux'
import {RegisterUser} from '../store/action/loginAction'
const Register = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState(null)
  const [checkPass, setCheckpass] = useState(null)

  const dispatch = useDispatch()

  // const {dataRegister} = useSelector(state => state.user)
  // console.log(dataRegister)

  const handleUserName = (e) => {
    setUserName(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleCheckPass = (e) => {    
    setCheckpass(e.target.value)
  }

  const handleRegister = () => {
    
      const test = password === checkPass ? 1 : 0
      if (+test === 1) {
        dispatch(RegisterUser({
          userName: userName,
          password: password,
          checkPass: checkPass
        }))
      }
      else {
        alert('Không đúng')
      }
  }

  return (
    <div>
        <div className='flex flex-col mt-10 justify-center items-center'>
        <div className='w-[250px] p-5 h-[300px] bg-gray-800 text-gray-300'>
          <div>
            <span>Tên đăng nhập : </span>
            <input className='text-black px-2' type='text'
            onChange={(e) => handleUserName(e) }
            ></input>
          </div>
          <div>
            <span>Mật khẩu : </span>
            <input className='text-black px-2'  type='password'
            onChange={(e) => handlePassword(e) }
            ></input>
          </div>
          <div>
            <span>Xác nhận mật khẩu : </span>
            <input className='text-black px-2'  type='password'
            onChange={(e) => handleCheckPass(e) }
            ></input>
          </div>
          <div onClick={() => handleRegister()}><Button title='Tạo tài khoản'></Button></div>
          
        </div>
      </div>
    </div>
  )
}

export default Register