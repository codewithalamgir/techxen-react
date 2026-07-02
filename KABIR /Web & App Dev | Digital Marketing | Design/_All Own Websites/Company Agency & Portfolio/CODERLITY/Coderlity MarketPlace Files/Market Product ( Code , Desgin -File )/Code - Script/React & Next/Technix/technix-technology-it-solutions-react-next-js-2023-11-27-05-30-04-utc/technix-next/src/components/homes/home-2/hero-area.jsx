import Link from 'next/link'
import React from 'react'
import Image from 'next/image';
import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
 

import LineArrowFour from '@/src/svg/line-arrow-4';
import shape_1 from "@assets/img/hero/hero-2/shape-1.png";
import shape_2 from "@assets/img/hero/hero-2/shape-2.png";
import shape_3 from "@assets/img/hero/hero-2/shape-3.png";  

const setting = {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: ".hero-button-next-1",
        prevEl: ".hero-button-prev-1",
    },
    breakpoints: {
        '1200': {
            
        },
        '992': {
            
        },
        '768': {
            
        },
        '576': {
            
        },
        '0': {
            
        },
    },
    }
const slider_data = [
    "technology",
    "architecture",
    "Computer",
]
const HeroArea = () => {
  return (
    <>
         <section className="tp-hero-2-area p-relative" style={{backgroundImage: `url(/assets/img/hero/hero-2/hero-bg.png)`}}>
            <div className="tp-hero-2-wrapper p-relative">
               <div className="container">
                  <div className="row align-items-center justify-content-center">
                     <div className="col-xl-12">
                        <div className="tp-hero-2-shape">
                           <Image className="shape-1 d-none d-lg-block" src={shape_1} alt="theme-pure" />
                           <Image className="shape-2 d-none d-lg-block" src={shape_2} alt="theme-pure" />
                           <Image className="shape-3 d-none d-lg-block" src={shape_3} alt="theme-pure" />
                        </div>
                        <div className="tp-hero-2-content text-center pt-200">
                           <div className="tp-hero-2-title-wrapper fadeUp">
                              <h3 className="tp-hero-2-title">Most Trusted <LineArrowFour /> 
                                 <br /> Technology <span>Services</span></h3>
                           </div>
                           <div className="tp-hero-2-btn fadeUp">
                              <Link className="tp-btn" href="/contact">Tell Us How Can We Help</Link>
                           </div>
                        </div>
                        <div className="tp-hero-2-side-text">
                           <div className="tp-hero-2-mail">
                              <a href="mailto:Contact@gmail.com"><i className="fa-light fa-envelope"></i> Contact@gmail.com</a>
                           </div>
                           <div className="tp-hero-2-message">
                              <p><i className="fa-solid fa-comments"></i> 734 H, Bryan Burlington, NC 27215 </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="tp-hero-2-bottom p-relative d-none d-md-block">
               <Swiper {...setting} modules={[Navigation]} className="hero-active-2">
                {slider_data.map((item, i)  => 
                    <SwiperSlide key={i}>
                        <h3 className="tp-hero-2-bottom-title">{item}</h3>
                    </SwiperSlide>
                )} 
               </Swiper>
               <div className="tp-hero-2-nav d-none d-xl-block">
                  <button type="button" className="hero-button-prev-1">prev</button>
                  <button type="button" className="hero-button-next-1">Next</button>
               </div>
            </div>
         </section>
    </>
  )
}

export default HeroArea