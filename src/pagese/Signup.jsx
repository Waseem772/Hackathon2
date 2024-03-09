
import { Button } from '@mui/material'
import React, { useState } from 'react'

const Signup = () => {
    const [data, setData] = useState({})

    const change_handle = (e) => {
        const { value, id } = e.target

        setData({ ...data, [id]: value })

    }


    const submit_handle = (e) => {
        e.preventDefault()

    }

    console.log(data)
    return (
        <div className='bg-blue-500 h-[100dvh] grid place-items-center px-3'>

            <form onSubmit={submit_handle} className='bg-white rounded-md max-w-md w-full py-6 px-3 grid grid-cols-2  gap-5'>

                <div className='text-primary_color col-span-2 text-center text-3xl font-bold'>
                    <h1>
                        SIGNUP
                    </h1>
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <input id='first_name' type='text' required={true} onChange={change_handle} placeholder='First Name' />
                </div>
                <div className='col-span-2 md:col-span-1'>
                    <input id='last_name' type='text' required={true} onChange={change_handle} placeholder='Last Name' />
                </div>

                <div className='col-span-2'>
                    <input id='username' type='text' required={true} onChange={change_handle} placeholder='Username' />
                </div>
                <div className='col-span-2'>
                    <input id='phone_number' type='number' required={true} onChange={change_handle} placeholder='Phone Number' />
                </div>
                <div className='col-span-2'>
                    <input id='email' type='email' required={true} onChange={change_handle} placeholder='Email Address' />
                </div>
                <div className='col-span-2'>
                    <input id='password' required={true} onChange={change_handle} type='password' placeholder='Password' />
                </div>
                <div className='col-span-2'>
                    <input id='BloodGroup' required={true} onChange={change_handle} type='text' placeholder='Blood Group' />
                </div>

                <div className='col-span-2'>
                    <Button type='submit' >
                        Signup
                    </Button>
                </div>



                <div className='col-span-2 space-x-1 text-center'>

                    <span>Already have account </span>
                    <Button className='underline text-primary_color'>
                        Login now
                    </Button>


                </div>




            </form>

        </div>
    )
}

export { Signup } 
