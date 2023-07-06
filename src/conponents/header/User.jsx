import React, { useEffect, useState } from 'react'
import icons from '../../asset/icons'


const User = () => {
  const  {AiOutlineUser} = icons
  const [stateLogin, setStateLogin] = useState(null)

  const handleSetLogin = () => {
    setStateLogin(!stateLogin)
  }

  const isLogin = false

  useEffect(() => {

  }, [isLogin])

  

  return (
    isLogin ? (
        <div>
        <div className='flex'>
            <AiOutlineUser onClick={() => handleSetLogin()} size={23} className='mr-1 cursor-pointer '></AiOutlineUser>
            <span>User</span>
        </div>
        {
            stateLogin && (
            <div className='bg-gray-100 text-gray-700 w-[300px] h-[200px] top-[60px] right-3 rounded-md p-3'>
            <div className='flex'>
                <img className='rounded-md w-[30px]'
                src='https://png.pngtree.com/png-vector/20190704/ourlarge/pngtree-businessman-user-avatar-free-vector-png-image_1538405.jpg' alt=''></img>
                <span>Tên user</span>
            </div>
            <div className='flex flex-col mt-4'>
                <span>Cài đặt tài khoản</span>
                <span>Giỏ hàng của tôi</span>
                <span>Đăng xuất</span>
            </div>
            </div>
            )
        }
    </div>
    ) : (
        <div><span>Đăng nhập</span></div>
    )
  )
}

export default User