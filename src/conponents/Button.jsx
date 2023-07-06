import React from 'react'

const Button = ({title}) => {
  return (
    <button className='flex justify-center items-center py-2 px-4 bg-gray-600 rounded-md text-white 
    hover:text-gray-900 hover:bg-gray-300 transition-all hover:border mt-6
    '>{title}</button>
  )
}

export default Button