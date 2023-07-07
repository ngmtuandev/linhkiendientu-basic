import React from 'react'

const Button = ({title}) => {
  return (
    <button className='flex justify-center items-center py-2 px-3 text-[12px] font-semibold bg-gray-600 rounded-md text-gray-900 
     transition-all hover:border mt-6 border-none bg-gradient-to-r from-orange-400 to-orange-300
     hover:bg-gradient-to-r hover:from-orange-700 hover:to-orange-600 hover:text-gray-100
    '>{title}</button>
  )
}

export default Button