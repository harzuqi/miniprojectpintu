import React from 'react'
import { FaStar } from 'react-icons/fa'
import Image from 'next/image'

type Props = {
    reviewTitle: string;
    userName: string;
    userImage: string;
    role: string;
    companyImage: string;
    companyName: string;
    description: string;
    // tambahin text disini kalo mau
}

const ReviewCard = ({reviewTitle, role, userImage, userName, description, companyImage, companyName}:Props) => {
  return (
    <div className='bg-gray-100 p-6 rounded-lg mr-4 shadow-md'>
        <h1 className='text-2xl font-bold text-black'>{reviewTitle}</h1>
        <div className='mt-2 flex items-center'>
            <FaStar className='text-yellow-500 w-5 h-6'/>
            <FaStar className='text-yellow-500 w-5 h-6'/>
            <FaStar className='text-yellow-500 w-5 h-6'/>
            <FaStar className='text-yellow-500 w-5 h-6'/>
            <FaStar className='text-yellow-500 w-5 h-6'/>
        </div>
        <p className='mt-4 text-base md:text-lg font-medium text-gray-800'>{description}</p>
        <span className='block w-full h-[1px] bg-gray-300 mt-6 mb-6'></span>
        <div className='flex items-center justify-between'>
            <div className='flex items-center space-x-4'>
                <Image src={userImage} alt='image' width={60} height={60} className='rounded-full'
                />
                <div >
                    <h1 className='text-base sm:text-lg text-black md:text-xl font-bold'>{userName}</h1>
                    <p className='text-sm text-black sm:text-base md:text-lg'>{role}</p>    
                </div>
            </div>
            <div>
                <Image src={companyImage} alt={companyName} width={80} height={80}/>
            </div>
        </div>
    </div>
  ) 
}

export default ReviewCard
