import React, { useEffect, useState } from 'react'
import icons from '../../asset/icons'
import { Link } from 'react-router-dom'
import path from '../../ultis/path'
import { useSelector, useDispatch } from 'react-redux'
import {checkLogin} from '../../store/action/loginAction'


const User = () => {
  const  {AiOutlineUser} = icons
  const [stateLogin, setStateLogin] = useState(null)

  
  const dispatch = useDispatch()

  const handleSetLogin = () => {
    setStateLogin(!stateLogin)
  }


  const {isLogin, dataRegister} = useSelector(state => state.user)

  useEffect(() => {
    // console.log('is login', dataRegister.userName)
  }, [isLogin])


  const logoutUser = () => {
    dispatch(checkLogin(false))
  }

  return (
    isLogin ? (
        <div>
        <div className='flex' onClick={() => handleSetLogin()}>
            <AiOutlineUser size={23} className='mr-1 cursor-pointer '></AiOutlineUser>
            <span>{dataRegister.name}</span>
        </div>
        {
            stateLogin && (
            <div className='bg-gray-100 fixed text-gray-700 w-[200px] h-[150px] top-[60px] right-3 rounded-md p-3'>
            <div className='flex items-center'>
                <img className='rounded-md w-[30px] mr-3'
                src='https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg' alt=''></img>
                <span>{dataRegister.name}</span>
            </div>
            <div className='flex flex-col mt-4'>
                <span className='hover:text-orange-600 cursor-pointer'>Cài đặt tài khoản</span>
                <span ><Link className='hover:text-orange-600' to={`/${dataRegister.name}/cart`}>Giỏ hàng của tôi</Link></span>
                <span className='cursor-pointer hover:text-orange-600' onClick={() => logoutUser()}>Đăng xuất</span>
            </div>
            </div>
            )
        }
    </div>
    ) : (
      <Link to={path.LOGIN}>
        <div><span>Đăng nhập</span></div>
      </Link>
    )
  )
}

export default User