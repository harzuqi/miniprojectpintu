'use client'
import React from 'react'
import { useEffect , useState} from 'react'
import { GrTechnology } from 'react-icons/gr'
import { NavLinks } from '@/constant/constant'
import Link from 'next/link'
import { HiBars3BottomRight } from 'react-icons/hi2'
import ThemeToggler from '../../Helper/ThemeToggler'

type Props = {
    openNav: () => void;
}

const Nav = ({openNav}: Props) => {

    const [navBg, setNavBg] = useState(false);

    useEffect(() => {
        const handler = () => {
            if (window.scrollY >= 90) {
                setNavBg(true);
            } else {
                setNavBg(false);
            }
        };
        window.addEventListener('scroll', handler);

        return () => {
            window.removeEventListener('scroll', handler);
        }

    }, []);
  return (
    <div className={`transition-all ${
        navBg ? 'bg-blue-900 shadow-md' : 'fixed'
        } duration-200 h-[12vh] z-[100] fixed w-full`}>
      <div className='flex items-center h-full justify-between w-[90%] xl:w[80%] mx-auto'>
        {/* Logo */}
        <div className='flex items-center space-x-2'>
            <div className='w-10 h-10 bg-black rounded-full flex items-center justify-center flex-col'>
                <GrTechnology className='w-6 h-6 text-white'/>
            </div>
            <h1 className='text-xl hidden sm:block md:text-2xl text-white font-bold'>harzuqiDev</h1>
        </div>
        {/* Nav Links */}
        <div className='hidden lg:flex items-center space-x-10'>
            {NavLinks.map((link) => {
                return <Link href={link.url} key={link.id} className='text-white text-lg hover:text-yellow-300 font-semibold transition-all duration-200'>
                    <p>{link.label}</p>
                </Link>
            })}   

        </div>
        {/* Button */}
        <div className='flex items-center space-x-4'>
            {/* 1st button create account*/}
            <a href="#" className='px-5 py-2.5 relative rounded group font-medium text-white inline-block'>
                <span className='absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-cyan-500 to-blue-500'></span>
                <span className='h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-cyan-500 to-blue-500'></span>
                <span className='absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-cyan-500 to-blue-500'></span>
                <span className='absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-cyan-500 from-blue-500'></span>
                <span className='relative'>
                    Create Account
                </span>
            </a>
            {/* Theme Toggler */}
            <ThemeToggler/>
            {/* Burger Menu*/}
            {/* buat navbar yang di hape itu */}
            <HiBars3BottomRight onClick={openNav} className='w-8 h-8 text-white lg:hidden cursor-pointer'/>
        </div>
      </div>
    </div>
  )
}

export default Nav

