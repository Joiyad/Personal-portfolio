import React from 'react';
import {BsHeartFill} from 'react-icons/bs'

const footer = () => {
  return (
    <div className='flex justify-center p-4 text-2xl text-teal-200 border-t-2 border-white border-opacity-20'>
        made with <div className='text-red-500 mx-2 md:mx-4 flex items-center py-2'><BsHeartFill size={20}/></div>  by Joiyad Khan
    </div>
  )
}

export default footer