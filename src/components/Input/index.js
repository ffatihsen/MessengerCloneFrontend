import React from 'react'

const Input = ({
    label = "",
    name = "",
    type = "text",
    clasName = "",
    isRequired = false,
    placeHolder = ""
}) => {
  return (
    <div className='w-1/2'>
        <label for = {name}  className='block text-sm font-medium text-gray-800 ' > {label} </label>
        <input className= {` bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${clasName}`} 
        type={type} id= {name} placeholder={placeHolder} required={isRequired}
       />


      
    </div>
  )
}

export default Input
