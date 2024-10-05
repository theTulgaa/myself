import React from 'react'
import { TbWorld } from "react-icons/tb";
import Link from 'next/link';
import { FaGithub } from "react-icons/fa";

export const Projects = () => {
  return (
    <div id='project' className='h-screen w-screen grid grid-cols-3 grid-rows-2'>
        <div className=" bg-[#DC143C] flex flex-col items-center">
            <p className='font-black text-lg p-12 mt-6  h-4/5 '>As my first foray into React JS development, I&apos;ve crafted a comprehensive cryptocurrency information platform. This website offers users real-time updates on coin prices, a meticulously curated list of the top 10 cryptocurrencies, and a plethora of essential market data</p>
            <hr className='w-4/5'/>
            <div className='flex gap-2 m-5'>
                <Link href="https://thetulgaa.github.io/crypto-begins/" target='_blank'><TbWorld  size={40}/></Link>
                <Link href="https://github.com/theTulgaa/crypto-begins" target='_blank'><FaGithub  size={40}/></Link>
            </div>
        </div>
        <div className=" bg-[#008B8B] flex flex-col items-center">
            <p className='font-black text-lg p-12 mt-6 h-4/5'>As an intern at Stocklab.mn, I was tasked with developing the demo front-end for their website. Leveraging React JS, I built a user-friendly and responsive web interface. This project proved to be a valuable learning experience.</p>
            <hr className='w-4/5'/>
            <div className='flex gap-2 m-5'>
                <Link href="https://thetulgaa.github.io/stocklab-begins/" target='_blank'><TbWorld  size={40}/></Link>
                <Link href="https://github.com/theTulgaa/stocklab-begins" target='_blank'><FaGithub  size={40}/></Link>
            </div>
        </div>
        <div className=" bg-[#C71585] flex flex-col items-center">
            <p className='font-black text-lg p-12 mt-6 h-4/5'>My friend and I joined forces to create a robust React-based matrix calculator. This versatile web application equips users with the tools to perform a diverse array of matrix operations, from simple addition and subtraction to intricate matrix equations. </p>
            <hr className='w-4/5'/>
            <div className='flex gap-2 m-5'>
                <Link href="https://thetulgaa.github.io/matrix-begins/" target='_blank'><TbWorld  size={40}/></Link>
                <Link href="https://github.com/theTulgaa/matrix-begins" target='_blank'><FaGithub  size={40}/></Link>
            </div>
        </div>
        <div className=" bg-[#000080] flex flex-col items-center">
            <p className='font-black text-lg p-12 mt-6 h-4/5'>I developed user-friendly todo app in flutter. Flutter is a good choice for developing app for IOS and Android. Developing mobile app is very different than website.  I learned a lot about mobile app development.</p>
            <hr className='w-4/5'/>
            <div className='flex gap-2 m-5'>
                <Link href=""><TbWorld  size={40}/></Link>
                <Link href="https://github.com/theTulgaa/flutter-todo" target='_blank'><FaGithub  size={40}/></Link>
            </div>
        </div>
        <div className=" bg-[#FF6347] flex flex-col items-center">
            <p className='font-black text-lg p-12 mt-6 h-4/5'>I am intern at Brainyx. This company services client machine learning, ai data  science and other related services. I am learning a lot about machine learning and data science. Despite difficuly of this  field, I am enjoying it.</p>
            <hr className='w-4/5'/>
            <div className='flex gap-2 m-5'>
                <Link href="https://brainyx.co/" target='_blank'><TbWorld  size={40}/></Link>
                <Link href=""><FaGithub  size={40}/></Link>
            </div>
        </div>
        <div className=" bg-[#B22222] flex flex-col items-center"><p className='font-black text-lg p-12 mt-6 '>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam expedita est corrupti ab laudantium, nihil ut voluptatum deleniti sit, quo, asperiores veritatis aperiam? Nostrum dignissimos officia nihil laudantium sapiente corporis.</p>
            <hr className='w-4/5'/>
            <div className='flex gap-2 m-5'>
                <Link href=""><TbWorld  size={40}/></Link>
                <Link href=""><FaGithub  size={40}/></Link>
            </div>
        </div>
    </div>
  )
}
