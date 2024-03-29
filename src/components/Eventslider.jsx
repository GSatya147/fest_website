import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// import Img2 from '../assets/img2.png';
import codequest from '../assets/codequest.avif';
import typesprint from '../assets/typesprint.webp';
import cipher from "../assets/cipherchase.avif";
import logicleague from '../assets/logicleague.avif';
import captureflag from '../assets/captureflag.avif';
import hunt from '../assets/huntthehint.avif';
import moviemad from '../assets/moviemad.avif';
import ipl from '../assets/ipl.avif';
import beg from '../assets/beg.avif';
import quiz from '../assets/quiz.avif';
import freefire from '../assets/freefire.jpg';
import bgmi from '../assets/bgmi.avif';
import { FaArrowRightLong , FaArrowLeftLong } from "react-icons/fa6";

import { Link } from 'react-router-dom'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';

// import { Navigation } from "swiper";

// import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
// import './eventstyles.css';

// import required modules
import { FreeMode, Pagination, Navigation } from 'swiper/modules';

// SwiperCore.use([MouseWheel,Pagination]);
export default function EventSlider() {
  return (
    <div className='section'>
    <><div className='container flex flex-col jusify-center items-center gap-y-10 lg:gap-y-5'>
        <div className='lg:h-[35] flex flex-col justify-center items-center'>
        <motion.p variants={fadeIn('left', 0.01)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.01 }} className='text-gradient max-w-sm mb-8'>Tech Events</motion.p>
        <div className='lg:h-[35]'>
        <Swiper
          // slidesPerView={1.25}
          breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1.25,
              },
              600: {
                width: 600,
                slidesPerView: 2.25,
              },
              
              768: {
                width: 768,
                slidesPerView: 3.25,
              },
              900: {
                width: 900,
                slidesPerView: 3.25,
              },
              1200: {
                width: 1200,
                slidesPerView: 3.25,
              },
            }}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          navigation={{
            nextEl: '.swiper-buton-next',
            prevEl: '.swiper-buton-prev',
            clickable: true,
          }}
          mousewheel= {true}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          modules={[FreeMode, Pagination ,Navigation]}
          className="mySwiper1"

        >
            <SwiperSlide>
              <Link to='/details' className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'> */}
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={typesprint} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Type Sprint</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              {/* </div> */}
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to='/details' className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'> */}
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={codequest} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Code Quest</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              {/* </div> */}
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to='/details' className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'> */}
              <div className='bg-black/40 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={logicleague} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Logic League</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              {/* </div> */}
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to='/details' className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'> */}
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={cipher} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Cipher Chase</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              {/* </div> */}
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to='/details' className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'> */}
              <div className='bg-black/40 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={captureflag} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Crypto-Venture</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              {/* </div> */}
              </Link>
            </SwiperSlide>
            </Swiper>
            <div className="slider-controller hidden lg:flex lg:gap-x-10 lg:justify-center">
              <div className="swiper-buton-prev slider-arrow btn w-9 h-9 mb-[35px] flex justify-center items-center">
              <FaArrowLeftLong />
              </div>
              <div className="swiper-buton-next slider-arrow btn w-9 h-9 mb-[35px] flex justify-center items-center">
              <FaArrowRightLong />
              </div>
            </div>
        
        </div>
        </div>
        <div className='lg:h-[35] flex flex-col justify-center items-center'>
        <motion.p variants={fadeIn('left', 0.01)} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.01 }} className='text-gradient max-w-sm mb-8'>Non-Tech Events</motion.p>
        <div className='lg:h-[35]'>
        <Swiper
          // slidesPerView={1.25}
          breakpoints={{
              320: {
                width: 320,
                slidesPerView: 1.25,
              },
              600: {
                width: 600,
                slidesPerView: 2.25,
              },
              
              768: {
                width: 768,
                slidesPerView: 3.25,
              },
              900: {
                width: 900,
                slidesPerView: 3.25,
              },
              1200: {
                width: 1200,
                slidesPerView: 3.25,
              },
            }}
          spaceBetween={30}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          navigation={{
              nextEl: '.swiper-buton-n',
              prevEl: '.swiper-buton-p',
              clickable: true,
            }}
          modules={[FreeMode, Pagination ,Navigation]}
          className="mySwiper1"

        >
            
            <SwiperSlide>
            <Link to='/details' className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
            {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'> */}
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px] lg:h-[250px]' src={hunt} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Hunt the Hint</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              {/* </div> */}
            </Link>
            </SwiperSlide>
            <SwiperSlide>
            <Link to='/details' className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
            {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'> */}
              <div className='bg-black/20 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={quiz} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Ex-Quiz-Me!</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              {/* </div> */}
            </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to='/details' className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'> */}
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={ipl} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>IPL Auction</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              {/* </div> */}
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to='/details' className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'> */}
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={moviemad} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Movie Madness</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              {/* </div> */}
              </div>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to='/details' className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'> */}
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px] lg:w-full' src={beg} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Get Grab Gather</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              {/* </div> */}
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to='/details' className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'> */}
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={freefire} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>Free Fire</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              {/* </div> */}
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to='/details' className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'>
              {/* <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl lg:h-[248px] lg:w-[565px]'> */}
              <div className='bg-black/70 w-full h-full absolute z-40 transition-all duration-300'></div>
              <img className='scale-125 transition-all duration-500 h-[248px]' src={bgmi} alt=''></img>
              <div className='absolute -bottom-full left-12 bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>BGMI</span>
              </div>
              <div className='absolute -bottom-full left-12 bottom-14 transition-all duration-700 z-50'> 
                <span className='text-2xl text-white'>1st March</span>
              </div>
              {/* </div> */}
              </Link>
            </SwiperSlide>
        </Swiper>
        <div className="slider-controller hidden lg:flex lg:gap-x-10 lg:justify-center">
              <div className="swiper-buton-p slider-arrow btn w-9 h-9 mb-[35px] flex justify-center items-center">
              <FaArrowLeftLong />
              </div>
              <div className="swiper-buton-n slider-arrow btn w-9 h-9 mb-[35px] flex justify-center items-center">
              <FaArrowRightLong />
              </div>
        </div>
        </div>
        </div>
      </div>
      
    </>
    </div>
  );
};