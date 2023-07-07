import React from 'react'

const footer = () => {
  return (
    <div>
      <div className='grid grid-cols-4 gap-6 bg-gradient-to-r from-orange-500 to-orange-600 text-gray-50 p-[20px]'>
        <div>
          <h4 className='mb-3 font-bold'>Về chúng tôi</h4>
          <div className='flex flex-col'>
            <span className='hover:text-[rgb(3,5,8)] cursor-pointer'>Gọi đặt hàng: 0363073476</span>
            <span className='hover:text-[rgb(3,5,8)] cursor-pointer'>(08:00-17:00 hỗ trợ tất cả các ngày trong tuần)</span>
            <span className='hover:text-[rgb(3,5,8)] cursor-pointer'>Email: nguyenmanhtuan@gmail.com</span>
          </div>
        </div>
        <div>
          <h4 className='mb-3 font-bold'>Hỗ trợ khách hàng</h4>
          <div className='flex flex-col'>
            <span className='hover:text-[rgb(3,5,8)] cursor-pointer'>Phương thức thanh toán</span>
            <span className='hover:text-[rgb(3,5,8)] cursor-pointer'>Chính sách đổi trả sản phẩm</span>
            <span className='hover:text-[rgb(3,5,8)] cursor-pointer'>Chính sách bảo hành</span>
            <span className='hover:text-[rgb(3,5,8)] cursor-pointer'>Hợp tác cùng phát triển</span>
            <span className='hover:text-[rgb(3,5,8)] cursor-pointer'>Ưu đãi khách hàng thân thiết</span>
          </div>
        </div>
        <div>
          <h4 className='mb-3 font-bold'>Đơn vị vận chuyển</h4>
          <div className='flex mt-3'>
            <img src="https://down-vn.img.susercontent.com/file/5e7282bd0f7ee0872fdb0bd1d40fbe9e" alt="" />
            <img src="https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2" alt="" />
            <img src="https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63" alt="" />
          </div>
          <div className='flex mt-3'>
            <img src="https://down-vn.img.susercontent.com/file/5e7282bd0f7ee0872fdb0bd1d40fbe9e" alt="" />
            <img src="https://down-vn.img.susercontent.com/file/d10b0ec09f0322f9201a4f3daf378ed2" alt="" />
            <img src="https://down-vn.img.susercontent.com/file/0d349e22ca8d4337d11c9b134cf9fe63" alt="" />
          </div>
        </div>
        <div>
          <h4 className='mb-3 font-bold'>Thanh toán</h4>
          <div className='flex mt-3'>
            <img src="https://down-vn.img.susercontent.com/file/d4bbea4570b93bfd5fc652ca82a262a8" alt="" />
            <img src="https://down-vn.img.susercontent.com/file/a0a9062ebe19b45c1ae0506f16af5c16" alt="" />
            <img src="https://down-vn.img.susercontent.com/file/38fd98e55806c3b2e4535c4e4a6c4c08" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default footer