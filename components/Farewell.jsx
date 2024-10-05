"use client"
import React from 'react'
import Typewriter from 'typewriter-effect';

export const Farewell = () => {
  return (
    <div className='h-screen w-screen flex justify-center mt-10'>
        <img src="https://i.pinimg.com/474x/78/d4/7a/78d47a60010ada6dbf4ede00e803f931.jpg" className='h-4/5 rounded-2xl'  alt="" />
        <span className='mx-20 w-1/3 font-black text-3xl'>
            <Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 25,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString('If you need me, just shine my light in the sky. I will be there no matter what and settle just-ice.')
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }} />
        </span>
        
    </div>
  )
}
