import React from 'react'

import Avatar from "../../assets/avatar.png"

const Dashboard = () => {

    const contacts = [
        {
            name:"John",
            status:"Available",
            img:Avatar
        },
        {
            name:"Marry",
            status:"Available",
            img:Avatar
        },
        {
            name:"Alexander",
            status:"Available",
            img:Avatar
        },
        {
            name:"Adam",
            status:"Available",
            img:Avatar
        },
        {
            name:"Alex",
            status:"Available",
            img:Avatar
        }
    ]

  return (
    <div className='w-screen flex'>
        <div className='w-[25%] border border-black h-screen bg-secondary'>
            <div className='flex  items-center my-8 mx-14'>
                <div className='border border-primary p-[2px] rounded-full ' >  <img src={Avatar} width={75} height={75} /> </div>
                
                <div className='ml-8'>
                    <h3 className='text-2xl'>Tutorials Dev</h3>
                    <p className='text-lg font-light'>My Account</p>
                </div>
            </div>

            <hr />

            <div className='mx-14 mt-10'>
                Messages
                <div className=' text-primary text-lg' >
                    {
                        contacts.map(({name,img,status}) => {
                            return (
                                <div className='flex  items-center py-8 border-b border-b-gray-300'>
                                <div className='cursor-pointer flex items-center'>
                                    <div>  <img src={img} width={60} height={60} /> </div>
                                    
                                    <div className='ml-6'>
                                        <h3 className='text-xl font-semibold'>{name} </h3>
                                        <p className='text-sm font-light text-gray-600'>{status} </p>
                                    </div>
                                
                                </div>
                            </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>


        <div className='w-[50%] border border-black h-screen'></div>
        <div className='w-[25%] border border-black h-screen'></div>
      
    </div>
  )
}

export default Dashboard
