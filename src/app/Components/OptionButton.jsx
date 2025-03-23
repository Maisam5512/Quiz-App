import React from 'react'

const OptionButton = ({title , borderColor}) => {
  return (
    <div className='w-full flex justify-center cursor-pointer'>
      <button className={` bg-blue-50 border-2 ${borderColor}  py-3 w-48 rounded-xl px-5 hover:bg-blue-400 hover:text-white text-center `}>{title}</button>
    </div>
  )
}

export default OptionButton
