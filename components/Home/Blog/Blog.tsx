import React from 'react'
import BlogCard from './BlogCard'

const Blog = () => {
  return (
    <div className='pt-16 pb-16'>
        <div className='text-center'>
            {/* subheading */}
            <h1 className='uppercase text-lg sm:text-xl md:text-2xl font-bold text-blue-700 dark:text-pink-500'>Latest Blog</h1>
            {/* heading */}
            <h1 className='text-xl sm:text-3xl md:text-4xl mt-1 font-bold'>
                Ready Our Latest Insights from <br /> Our Blog Posts
            </h1>
        </div>
        <div className='w-[80%] mx-auto mt-16 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            <div data-aos='fade-right'>
                <BlogCard
                    image='/images/b1.png'
                    title='Boost Your Business with Our Innovative Software Solutions'
                />
            </div>
            <div data-aos='fade-right' data-aos-delay='100'>
                <BlogCard
                    image='/images/b2.png'
                    title='Boost Your Business with Our Innovative Software Solutions'
                />
            </div>
            <div data-aos='fade-right' data-aos-delay='200'>
                <BlogCard
                    image='/images/b3.png'
                    title='Boost Your Business with Our Innovative Software Solutions'
                />
            </div>
        </div>
    </div>
  )
}

export default Blog
