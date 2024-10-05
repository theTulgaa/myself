import React from 'react'
import { IoIosCall } from "react-icons/io";
import { CiMail } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export const About = () => {
  return (
    <div className='h-screen overflow-y-auto w-screen flex flex-col' id='about'>
        <div className="flex w-ful flex-1">
            <div className="h-full bg-red-500">
                <img src="https://i.pinimg.com/474x/72/ae/0f/72ae0fa8aedad6c83bcdbb83c2487b03.jpg" className='h-full' alt="" />
            </div>
            <div className="h-full flex-1 bg-[#008080] flex justify-center items-center flex-col">
                <span className='font-black text-3xl'>About me</span>
                <p className='w-1/2'>I&apos;m Erdenetulga Lkhagvachuluu, junior computer science student from Ulaanbaatar, Mongolia. I have been programming for 4 years and this is demo of my portfolio.</p>
            </div>
        </div>
        <div className="flex w-full flex-1">
            <div className="bg-[#4682B4] h-full flex-1 flex flex-col items-center">
                <span className='text-center font-black text-3xl flex justify-center items-center mt-20'>They call me <span className='text-black text-5xl mx-3'> VIGILANTE</span></span>
                <hr className='w-1/2 mt-3' />
                <p className='w-1/2 font-black text-lg mt-10'>
                    I was born on July 6th, 2004. I am the eldest son of my parents. My childhood was spent in a small town called Bayantes, which borders Russia. Like most of the children in Mongolia, I was raised playing football, basketball, and other activities.  I&apos;ve always had a natural inclination toward science. Growing up, I devoured science fiction comics and biographies of renowned scientists. This early exposure undoubtedly fueled my decision to pursue a career in this field.
                    I&apos;ve found programming to be incredibly enjoyable. The ability to bring my ideas to life simply by instructing a computer is incredibly empowering. My programming skills have significantly improved since I first attempted to build a calculator app. But this is not enough, i know that all we can do is improve. As engineers, we have a responsibility to make the world a better place. To achieve this, we must commit to lifelong learning.
                </p>
                <hr className='w-1/2 mt-3' />
                <span className='font-black text-2xl mt-20 text-green-500 border rounded-lg p-4'>Get in touch with me</span>
                <div className='flex flex-col w-1/2 mt-8'>
                    <div className='flex items-center'>
                        <IoIosCall />
                        <span className='font-black mx-2'>976+8650-0904</span>
                    </div>
                    <div className='flex items-center'>
                        <CiMail />
                        <span className='font-black mx-2'>tulgalhagva04@gmail.com</span>
                    </div>
                    <div className='flex items-center'>
                        <CiLinkedin />
                        <span className='font-black mx-2'>linkedin.com/in/etuka/</span>
                    </div>
                     <div className='flex items-center'>
                        <FaInstagram />
                        <span className='font-black mx-2'>instagram.com/tulgaa_ron</span>
                    </div>
                </div>
            </div>
            <div className="bg-white h-full">
                <img src="https://i.pinimg.com/474x/3d/84/53/3d8453473169edf7b80139478cb6fcca.jpg" className='h-full' alt="" />
            </div>
        </div>
    </div>
  )
}
