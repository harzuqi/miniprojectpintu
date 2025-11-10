"use client"
import React from "react"
import Hero from "./Hero/Hero"
import Services from "./Services/Services"
import About from "./About/About"
import WhyChoose from "./WhyChoose/WhyChoose"
import Software from "./Software/Software"
import Project from "./Project/Project"
import Review from "./Review/Review"
import Blog from "./Blog/Blog"
import Footer from "./Footer/Footer"
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"

const Home = () => {

  useEffect(() => {
    const initAOS = async () => {
      await import("aos");
      AOS.init({ duration: 1000,
      once: true,
      easing: "ease",
      anchorPlacement: "top-center"
       })
    }
    initAOS();
  }, [])

  return (
    <div className='overflow-hidden'>
      <Hero />
      <Services/>
      <About/>
      <WhyChoose/>
      <Software/>
      <Project/>
      <Review/>
      <Blog/>
    </div>
  )
}

export default Home;
