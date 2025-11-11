'use client'
import React from 'react'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import ReviewCard from './ReviewCard'

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1224 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1224, min: 764 },  
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 764, min: 0 },
        items: 1,
        slidesToSlide: 1 // optional, default to 1.
    }
};

const Review = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='w-[90%] md:w-[80%] mx-auto'>
            {/* Section Heading */}
            <div className='grid grid-clos-1 lg:grid-cols-2 gap-10 items-center'>
                <div>
                    <h1 className='text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500 uppercase'>Testimonial</h1>
                    <h1 className='text-xl sm:text-3xl md:text-4xl mt-1 font-bold'>Trusted by Industry Leader Clients</h1>
                </div>
                <div className='lg:ml-auto '>
                    <a href="#" className='w-full py-4 text-base sm:text-lg md:text-xl text-center text-white transition-colors font-semibold duration-300 bg-blue-800 rounded-full uppercase hover:bg-blue-900 ease px-9 md:w-auto'>
                        All Reviews
                    </a>
                </div>
            </div>
            {/* slider */}
            <div className='mt-16'>
                <Carousel
                    showDots={false}
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={4000}
                >
                    <ReviewCard reviewTitle="Great Work!" userName='BebekJK' userImage='/images/c1.jpg' role='Mantan Tops' companyName='PINTU' companyImage='/images/cc1.png' description='"Orang yang paling tidak bahagia adalah mereka yang takut pada perubahan"
'/>
                    <ReviewCard reviewTitle="Apik Pol Rek!" userName='Dik Denzel' userImage='/images/c2.jpg' role='Menkom Uhuy' companyName='PINTU' companyImage='/images/cc1.png' description='#amazing#shashabeautiful #adelinebeautiful#bomchubbyboy'/>
                    <ReviewCard reviewTitle="Mantap Jos" userName='Will Not' userImage='/images/c3.jpg' role='Menkom juga' companyName='PINTU' companyImage='/images/cc1.png' description='Proud of what we built together at TikTok TechJam 2025 — PrivaStream — which won both the Overall Champion and People’s Choice Award!'/>
                </Carousel>
            </div>
        </div>
    </div>
  )
}

export default Review
