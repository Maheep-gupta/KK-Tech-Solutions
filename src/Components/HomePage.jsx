import React, { useEffect, useState } from 'react'
import '../index.css'
import logo from '../assets/KK LOGO.png'

import fullStackIamge from '../assets/Full-Stack-Developer.jpg'
import testiPeople from '../assets/owp-people-6.jpg'
import dataScience from '../assets/datascience.webp'
import sdt from '../assets/sdt.jpeg'
import sd from '../assets/sd.jpeg'
import trainingCourses from '../assets/Courses.png'
import '../index.css'
import { Link } from 'react-router-dom'
import {  Link as HashLink, animateScroll as scroll } from 'react-scroll';

import { motion, useAnimation } from "framer-motion";

import { useInView } from 'react-intersection-observer'

function HomePage() {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };
    const boxVariant = {
        hidden: { opacity: 0, y: 200 },
        visible: { opacity: 1, y: 0 },
    }
    const control = useAnimation()
    const [up, inView] = useInView()

    const [mobilenav, setMobilenav] = useState(false)

    const handleMobilenav = () => {

        if (mobilenav === true) {
            setMobilenav(false)
        } else {

            setMobilenav(true)
        }
    }
    useEffect(() => {
        if (inView) {
            control.start("visible");
        }
    }, [control, inView]);
    return (
        <>
            <div className='toptobottom text-[#fff] font-extrabold fixed bottom-3 right-3 rounded-lg bg-gray-400 hover:bg-gray-700   text-center align-middle p-[20px]' onClick={scrollToTop}>
                <i class="fa-solid fa-arrow-up"></i>
            </div>

            <div className='top-banner bg-[#7d2c6e] text-white text-left max-w-screen'>
                <div className='flex justify-center items-center '>
                    <div className='flex justify-center w-full lg:flex-row flex-col p-2 items-center gap-2'>
                        <div className='flex space-x-2'>
                            <div className='space-x-2'>

                                <i class="fa-solid fa-phone"></i>
                                <span> +91 82997 28943  </span>
                            </div>
                            <div className='space-x-2'>


                                <i class="fa-regular fa-clock"></i>
                                <span className=''>Monday - Sunday 10:00 - 22:00</span>
                            </div>

                        </div>
                        <div className='space-x-2'>
                            <i class="fa-brands fa-x-twitter"></i>
                            <i class="fa-brands fa-facebook"></i>
                            <i class="fa-brands fa-pinterest-p"></i>
                            <i class="fa-brands fa-instagram"></i>
                            <i class="fa-brands fa-linkedin"></i>
                            <i class="fa-brands fa-youtube"></i>
                            <i class="fa-brands fa-vine"></i>
                        </div>

                    </div>

                </div>
            </div>
            {/* KK heading */}
            <section id='home' className='bg-image propertise max-w-screen h-screen max-h-screen text-white lg:bg-fixed bg-local  '>
                <div className='bg-black h-full w-full opacity-[0.5]'>
                </div>
                <div className='relative -top-full mt-2 cursor-pointer'>
                    <div className='flex justify-around lg:bg-transparent bg-[#333]'>

                        <div className='h-28 '>
                            <div className='logo h-full flex justify-center items-center w-64 md:w-80'>
                                <img src={logo} alt='logo' />
                            </div>
                        </div>
                        <div className='text-white space-x-5 justify-center items-center text-sm font-bold lg:flex hidden '>
                            <span className='hover:text-yellow-400 cursor-pointer'>
                                <HashLink to='home'smooth='true' duration='500' >
                                HOME
                                </HashLink>
                            </span>
                            <span className='hover:text-yellow-400 cursor-pointer'>
                            <HashLink to='pack'smooth='true' duration='500' >
                                CHOOSE YOUR PACK</HashLink></span>
                            <span className='hover:text-yellow-400 cursor-pointer'>
                            <HashLink to='pricing'smooth='true' duration='500' >
                                PRICING</HashLink></span>
                            <span className='hover:text-yellow-400 cursor-pointer'>
                            <HashLink to='contact'smooth='true' duration='500' >
                                CONATCT ME</HashLink></span>
                        </div>

                        <div className='justify-center items-center lg:hidden flex'>
                            <div onClick={handleMobilenav}>
                                {mobilenav ?<i class="fa-solid fa-x fa-2xl"></i>
                                :
                                <i class="fa-solid fa-bars  fa-2xl text-white"></i>}
                                <span className='text-lg pl-5'>Menu</span>
                            </div>

                        </div>




                    </div>

                    {mobilenav ?
                        <div className='bg-white text-black w-full flex flex-col text-center'>
                             <span className='hover:text-yellow-400 cursor-pointer p-5 border-b-[1px]'>
                                <HashLink to='home'smooth='true' duration='500' >
                                HOME
                                </HashLink>
                            </span>
                            <span className='hover:text-yellow-400 cursor-pointer p-5 border-b-[1px]'>
                            <HashLink to='pack'smooth='true' duration='500' >
                                CHOOSE YOUR PACK</HashLink></span>
                            <span className='hover:text-yellow-400 cursor-pointer p-5 border-b-[1px]'>
                            <HashLink to='pricing'smooth='true' duration='500' >
                                PRICING</HashLink></span>
                            <span className='hover:text-yellow-400 cursor-pointer p-5 border-b-[1px]'>
                            <HashLink to='contact'smooth='true' duration='500' >
                                CONATCT ME</HashLink></span>
                        </div> : null}

                </div>
                <div className='relative -top-[75%] w-full max-h-full text-7xl text-center font-bold align-baseline'>


                    <p>KK TECH</p>
                    <p>SOLUTION</p>

                    <button className='uppercase text-lg bg-[#A64193] px-[40px] py-[18px] hover:bg-white hover:text-[#A64193] rounded-lg'>
                        <Link to='/register'>

                        Register Now
                        </Link>
                        </button>
                </div>

            </section >

            <section className='flex flex-col h-full justify-center items-center text-center  mt-24 mb-10'>
                <div className='max-w-[1100px]'>

                    <p className='m-4 font-bold text-lg '>
                        WHAT IS OUR OBJECTIVE?
                    </p>
                    <p className='text-[#374151]'>
                        At KK Tech Solution, our mission is clear — we aim to help organizations leverage technology effectively to meet their business objectives and overcome complex challenges. We understand that every business is unique, and our solutions are tailored to address the specific needs of each client.</p>
                    <p className='text-[#374151]'>


                        KK Tech Solution serves a diverse clientele across various industries, including finance, healthcare, manufacturing, and beyond. Our commitment to excellence and continuous innovation sets us apart in the competitive landscape of IT solutions.</p>
                    <p className='text-[#374151]'>

                        Choose KK Tech Solution as your partner in digital transformation, and experience the difference that a comprehensive IT solutions company can make. We don't just provide services; we pave the way for your business to thrive in the dynamic and ever-evolving digital landscape..
                    </p>
                </div>
            </section>

            <section className='mb-10 flex items-center justify-center overflow-hidden '>
                <div className='max-w-[1140px] flex items-center justify-center'>
                    <div className='flex gap-5 flex-wrap justify-center align-middle'>
                        <motion.div variants={boxVariant} initial="hidden"
                            animate={control} ref={up}
                            transition={{ duration: 0.5 }}
                            className='border-[2px] mt-10 flex flex-col justify-center items-center border-[#C749B0] w-[257px] h-[235px] px-3 py-10'>
                            <img className='w-[70px] mb-3' src={trainingCourses} />
                            <p className='uppercase font-bold'>Training Courses</p>
                        </motion.div>
                        <motion.div variants={boxVariant} initial="hidden"
                            animate={control} ref={up}
                            transition={{ duration: 0.5 }} className='border-[2px] flex  flex-col justify-center items-center border-[#C749B0] w-[257px] h-[235px] px-3 py-10'>
                            <img className='w-[70px] mb-3' src={trainingCourses} />
                            <p className='uppercase font-bold'>Training Courses</p>
                        </motion.div>

                        <motion.div variants={boxVariant} initial="hidden"
                            animate={control} ref={up}
                            transition={{ duration: 0.5 }} className='border-[2px] mt-10 animation-bottom flex flex-col justify-center items-center border-[#C749B0] w-[257px] h-[235px] px-3 py-10'>
                            <img className='w-[70px] mb-3' src={trainingCourses} />
                            <p className='uppercase font-bold'>Training Courses</p>
                        </motion.div>

                        <motion.div variants={boxVariant} initial="hidden"
                            animate={control} ref={up}
                            transition={{ duration: 0.5 }} className='border-[2px] flex flex-col animation-up justify-center items-center border-[#C749B0] w-[257px] h-[235px] px-3 py-10'>
                            <img className='w-[70px] mb-3' src={trainingCourses} />
                            <p className='uppercase font-bold'>Training Courses</p>
                        </motion.div>



                    </div>
                </div>
            </section>




            <section className='bg-[#7D2C6E] text-white flex  justify-center items-center py-24 sm:px-0 px-2'>
                <div className='flex flex-col flex-wrap'>
                    <div className='uppercase text-4xl text-center font-bold pb-20'>
                        Achieve your goals in 4 steps
                    </div>
                    <div className='flex   gap-x-32 flex-wrap justify-center items-center'>
                        <div className='flex flex-col'>
                            <p className='text-[89px] text-center font-bold'>1</p>
                            <p className='text-lg w-full text-center'>Complete Assessment</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[89px] text-center font-bold'>2</p>
                            <p className='text-l w-full text-center'>Goal Definition</p>
                        </div>
                        <div className='flex flex-col'>
                            <p className='text-[89px] text-center font-bold'>3</p>
                            <p className='text-lg w-full text-center'>Tailored Program</p>
                        </div>
                        <div className='flex flex-col '>
                            <p className='text-[89px] text-center font-bold'>4</p>
                            <p className='text-lg w-full text-center'>Work, Work, Work!</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='py-24'>
                <div className='uppercase text-4xl text-center font-bold pb-20 flex-wrap'>
                    our services
                </div>
                <div className='flex flex-col justify-center items-center '>
                    <div className='max-w-[1140px] flex gap-x-5  justify-center items-center flex-wrap'>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={fullStackIamge} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Full Stack Development</p>
                            </div>
                        </div>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={dataScience} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Data Science</p>
                            </div>
                        </div>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={sdt} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Software Development Training</p>
                            </div>
                        </div>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={sd} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Software Development</p>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[1140px] flex gap-x-5 justify-center items-center flex-wrap'>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={fullStackIamge} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Full Stack Development</p>
                            </div>
                        </div>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={dataScience} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Data Science</p>
                            </div>
                        </div>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={sdt} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Software Development Training</p>
                            </div>
                        </div>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={sd} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Software Development</p>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[1140px] flex gap-x-5 justify-center items-center flex-wrap'>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={fullStackIamge} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Full Stack Development</p>
                            </div>
                        </div>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={dataScience} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Data Science</p>
                            </div>
                        </div>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={sdt} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Software Development Training</p>
                            </div>
                        </div>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={sd} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Software Development</p>
                            </div>
                        </div>
                    </div>
                    <div className='max-w-[1140px] flex gap-x-5 justify-center items-center flex-wrap'>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={fullStackIamge} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Full Stack Development</p>
                            </div>
                        </div>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={dataScience} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Data Science</p>
                            </div>
                        </div>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={sdt} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Software Development Training</p>
                            </div>
                        </div>
                        <div className='cards w-64'>
                            <div className='w-full'>
                                <img src={sd} alt='card-image' />
                            </div>
                            <div>
                                <p className='w-full pt-2 text-lg uppercase text-center font-bold
                                '>Software Development</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className='propertise bg-image-2 h-[600px] lg:bg-fixed bg-local'>
                <div className='bg-black h-full w-full opacity-[0.5]'>
                </div>
                <div className='relative -top-full text-white flex justify-center items-center py-24'>
                    <div className='max-w-[1140px]'>
                        <p className='uppercase text-4xl font-bold text-center pb-20'>

                            testimonials
                        </p>
                        <p className=' text-center text-lg'>
                            Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum<br />
                            magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus<br />
                            et ultrices posuere cubilia Curae; Morbi lacinia molestie dui.
                        </p>
                        <div className='flex flex-col justify-center items-center gap-y-3 pt-6'>
                            <div className='rounded-full w-[100px] h-[100px]'>
                            <i class="fa-solid fa-user"></i>
                                {/* <img className='rounded-full' src={testiPeople} alt="user" /> */}
                            </div>
                            <div className='text-center'>
                                <p className='uppercase text-lg'>
                                shivendra Mishra</p>
                                <p className='uppercase text-sm text-yellow-400'>
                                    -
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <section id='pricing' className=' bg-white py-20 flex justify-center items-center'>
                <div className='max-w-[1140px] w-full flex justify-center flex-col items-center'>

                    <p className='uppercase text-4xl font-bold'>

                        PRICING PLANS
                    </p>
                    <p className='text-lg text-[#7D2C6E] '>

                        <i>Go with the one that’s right for you
                        </i>
                    </p>
                </div>
            </section>


            <section className='proprtise bg-image lg:h-[650px] sm:h-[350px] h-[250px] lg:bg-fixed bg-local '>
                <div className='bg-black h-full w-full opacity-[0.5]'>
                </div>
                <div className='relative -top-full flex items-center justify-center py-24'>
                    <div className='max-w-[1140px] w-full'>
                        <div className='font-bold lg:text-[52px]  sm:text-[30px] text-[20px] text-white text-right lg:pt-40 sm:pt-0 '>
                            CUSTOMIZED COACHING TO
                            <p className='text-yellow-300 lg:text-[100px] sm:text-[50px] text-[25px] font-bold'>ACHIEVE YOUR GOALS</p>
                        </div>
                    </div>
                </div>

            </section>

















            <footer id='contact' className=' bg-white flex flex-col items-center pt-20 mb-10 '>
                <p className='uppercase text-4xl font-bold pb-0 lg:pb-16'>Keep in touch!</p>
                <div className='max-w-[1140px] flex'>

                    <div>

                    </div>


                    <div className='pt-20 space-y-16'>
                        <div className='flex flex-col gap-y-4 justify-center items-center'>
                            <i class="fa-solid fa-location-dot text-[#7D2C6E] fa-2xl"></i>
                            <p className='text-xl text-center'>MM255 Chandralok Colony <br />
                            Purania Chauraha Lucknow</p>
                        </div>
                        <div className='flex flex-col gap-y-4 justify-center items-center'>
                            <i class="fa-solid fa-phone text-[#7D2C6E] fa-2xl"></i>
                            <p className='text-xl text-center'>+91 82997 28943 <br />
                            +91 89533 34065 </p>
                        </div>
                        <div className='flex flex-col gap-y-4 justify-center items-center'>
                            <i class="fa-solid fa-envelope text-[#7D2C6E] fa-2xl"></i>
                            <p className='text-xl text-center'>shivendra.kktech@gmail.com<br />
                            shivendra.kktech@gmail.com</p>
                        </div>

                    </div>
                </div>
            </footer>
            <div className='text-sm capitalize text-[#3d3d3d] bg-[#f5f5f5] py-5 text-center font-semibold'>
                2024 get taught with us
            </div>
        </>
    )
}

export default HomePage