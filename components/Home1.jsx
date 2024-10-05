"use client"
import React, {useState} from 'react'
import Typewriter from 'typewriter-effect';
import Link from 'next/link';

export const Home1 = () => {
  const  [text] = useState("Welcome to my portfolio. This website is all about myself and projects i have done. Have a nice experience visiting my website and feel free to get in touch with me.");
  return (
    <div className='h-screen w-screen' id='home'>
        <header className='flex justify-between px-20 pt-5'>
            <Link href="#home"><span className='text-3xl font-extrabold'>BATMAN</span></Link>
            <div className='flex gap-3 items-center'>
              <Link href="#about" className='font-black text-lg'>About</Link>
              <Link href="#project" className='font-black text-lg'>Work</Link>
            </div>
        </header>
        <br />
        <br />
        <br />
        <div className='w-full justify-center items-center flex h-4/5 flex-1'>
          <div className='flex w-1/2 h-full rounded-lg'>
            <div className='flex justify-center  w-full'>
              <div className='w-1/2 h-full'><img src="https://i.pinimg.com/474x/70/30/ac/7030ac49db14d6b43d5802c2692c2d0d.jpg" alt="" className='object-cover w-full h-full rounded-lg'/></div>
              <div className='w-1/2 font-black italic m-4'><Typewriter
                    options={{
                      autoStart: true,
                      loop: true,
                      delay: 50,
                      deleteSpeed: 25,
                    }}
                    onInit={(typewriter) => {
                      typewriter
                        .typeString(text)
                        .pauseFor(1000)
                        .deleteAll()
                        .start();
                    }}
                  /></div>
            </div>
          </div>
        </div>
    </div>
  )
}
