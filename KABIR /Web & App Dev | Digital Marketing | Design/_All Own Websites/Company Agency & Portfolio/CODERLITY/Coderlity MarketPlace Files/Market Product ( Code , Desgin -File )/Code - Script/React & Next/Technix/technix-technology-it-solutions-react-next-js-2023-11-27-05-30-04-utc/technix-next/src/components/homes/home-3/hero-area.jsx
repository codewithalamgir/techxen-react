import Link from 'next/link';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper';

import slider_shape_1 from "@assets/img/hero/hero-3/shape-1.png";
import slider_shape_2 from "@assets/img/hero/hero-3/shape-2.png";
import slider_shape_3 from "@assets/img/hero/hero-3/shape-3.png";


const hero_slider = [
    {
        id: 1,
        bg_slider_img: "/assets/img/hero/hero-3/hero-1.jpg",
        title: "Trusted it &",
        title_color: "Tech",
        title_2: "Solution",
        bottom_title: "technology",        
    },
    {
        id: 2,
        bg_slider_img: "/assets/img/hero/hero-3/hero-2.jpg",
        title: "Modern it &",
        title_color: "Tech",
        title_2: "software",
        bottom_title: "architecture",        
    },
    {
        id: 3,
        bg_slider_img: "/assets/img/hero/hero-3/hero-3.jpg",
        title: "Trusted it &",
        title_color: "Tech",
        title_2: "professional",
        bottom_title: "Computer",        
    },
]

 
const setting = {
    slidesPerView: 1,
    spaceBetween: 0,
    effect: 'fade',
    autoplay: {
        delay: 5000,
    },
    watchSlidesProgress: true,
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
const HeroArea = () => {
    const [isLoop, setIsLoop] = useState(false)
    useEffect(() => {
        setIsLoop(true)
    }, [])
    return (
        <>
            <section className="tp-hero-3-area p-relative fix">
                <Swiper {...setting} loop={isLoop} modules={[Navigation, EffectFade, Autoplay ]} className="hero-active-3">
                    {hero_slider.map((item, i) => 
                        <SwiperSlide key={i} className="swiper-slide">
                            <div className="tp-hero-3-wrapper p-relative">
                                <div className="container">
                                <div className="tp-hero-3-shape">
                                    <Image className="shape-1" src={slider_shape_1} alt="theme-pure" />
                                    <Image className="shape-2" src={slider_shape_2} alt="theme-pure" />
                                    <Image className="shape-3" src={slider_shape_3} alt="theme-pure" />
                                </div>
                                <div className="tp-hero-3">
                                    <div className="tp-hero-bg" style={{backgroundImage: `url(${item.bg_slider_img})`}}></div>
                                    <div className="row align-items-center justify-content-center">
                                        <div className="col-lg-12">
                                            <div className="tp-hero-3-content p-relative">
                                            <div className="tp-hero-3-title-wrapper">
                                                <span className="tp-section-title__pre p-relative">
                                                    best <span className="title-pre-color">it solutions</span>
                                                    <svg width="123" height="8" viewBox="0 0 123 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.384401 7.82144C0.645399 4.52972 8.83029 8.38041 10.8974 7.67652C12.4321 7.1486 11.6386 7.03474 12.9749 6.19628C14.0816 4.61253 15.7519 3.89829 17.9756 4.06391C18.6125 4.48831 19.2284 4.93342 19.8444 5.38888C21.1076 6.09277 22.1621 6.51717 23.6028 6.13417C24.8973 5.79258 25.5237 4.79885 26.6095 4.18812C30.8481 1.80732 31.3701 2.90456 34.5855 4.58147C36.0993 5.36817 37.634 6.48612 39.461 6.08242C40.1604 5.92715 40.2127 5.67871 40.672 5.54415C42.1023 4.10531 43.9606 3.52564 46.2469 3.80512C47.0612 4.28129 47.8651 4.75745 48.669 5.25431C50.9866 6.22733 54.5049 6.23769 54.6615 3.08053C54.3065 3.22545 53.962 3.37037 53.6175 3.51529C55.622 5.75117 58.6078 6.59998 61.5205 5.5752C64.8091 4.41585 63.8277 3.02877 67.1685 4.35374C68.6614 4.94377 70.2587 5.14045 71.856 4.96447C73.6412 4.7678 75.1028 3.27721 76.6271 3.07018C79.0491 2.73894 81.3354 4.89201 84.2482 4.15707C85.3235 3.88793 86.9417 2.27313 87.7978 2.21102C88.6329 2.14891 89.9484 3.68091 90.8358 4.14672C93.3936 5.51309 96.5882 5.75117 99.3234 4.7471C101.902 3.80512 100.858 3.60845 103.124 4.30199C104.366 4.67464 105.253 5.34747 106.652 5.45099C109.628 5.65801 112.175 4.26058 113.678 1.77626C113.25 1.77626 112.822 1.77626 112.384 1.77626C114.722 5.49239 119.587 6.10312 122.771 3.05983C123.471 2.39734 122.406 1.34151 121.707 2.00399C119.316 4.29164 115.516 3.95004 113.678 1.03097C113.386 0.554807 112.687 0.544455 112.384 1.03097C110.223 4.62288 105.159 4.84026 102.549 1.7038C102.278 1.38291 101.777 1.46572 101.495 1.7038C97.6113 4.99553 91.8171 4.46761 88.6747 0.368483C88.4242 0.0372403 87.85 -0.190489 87.5159 0.223564C84.9685 3.37037 80.7717 3.86723 77.6606 1.10343C77.3787 0.854995 76.9507 0.823941 76.6584 1.10343C73.422 4.26058 68.6823 4.52972 65.1432 1.63134C64.83 1.37256 64.3706 1.38291 64.1409 1.75556C61.9799 5.40958 57.2297 5.74082 54.4631 2.65613C54.0873 2.24207 53.44 2.59402 53.4191 3.09088C53.2103 7.04509 45.6727 1.72451 43.8979 1.92118C40.4841 2.30418 40.2127 5.74082 35.7026 3.82583C33.4894 2.88386 31.8085 0.989563 29.1777 1.39326C26.9226 1.74521 25.9622 3.86723 23.9682 4.63323C20.4603 5.9789 19.2702 2.13856 16.2531 2.33524C11.2941 2.66648 14.1442 7.41774 6.43955 5.75117C4.22629 5.27501 -0.221114 3.93969 0.00856432 7.82144C0.0190042 8.05952 0.363521 8.05952 0.384401 7.82144Z" fill="currentColor"/>
                                                    </svg>
                                                </span>
                                                <h3 className="tp-hero-3-title">{item.title}
                                                    <span className="title-color"> {item.title_color}</span>
                                                    <svg className="circle" width="225" height="109" viewBox="0 0 225 109" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M13.1481 76.3679C55.8581 93.1793 99.7529 104.44 143.772 104.183C162.905 104.079 184.701 104.166 202.722 94.6158C211.271 90.0778 219.878 82.1335 220.977 67.646C222.363 49.2762 210.892 35.2588 200.906 27.2179C165.903 -0.962245 120.282 3.56052 82.2045 6.12755C61.2594 7.56939 40.2183 11.3015 20.4023 21.1492C14.2432 24.1994 -1.70459 30.792 5.73782 44.0162C9.5729 50.8451 16.7641 54.9568 22.1261 58.4055C62.0733 84.2021 105.527 88.9812 148.155 86.4613C150.328 86.3325 150.504 91.2898 148.331 91.4186C104.606 93.9773 59.5704 89.0201 18.8517 61.4317C12.3772 57.0608 -3.9171 46.3324 1.13856 32.0948C4.27727 23.2263 13.5355 19.7027 19.4163 16.7922C30.4826 11.3337 41.9705 7.7833 53.5703 5.39836C78.3 0.340518 103.691 0.456709 128.733 1.23489C150.355 1.92603 172.628 4.49122 193.003 16.9725C207.334 25.7434 227.976 44.79 223.586 71.8416C220.023 93.7705 201.953 100.932 188.724 103.79C130.327 116.483 69.7686 101.575 13.0061 77.3604C12.5744 77.1678 12.7173 76.2012 13.1481 76.3679Z" fill="currentColor"/>
                                                    </svg>
                                                    <svg className="line" width="265" height="6" viewBox="0 0 265 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M0.48167 4.22573C87.7577 2.55537 174.532 2.28989 261.746 5.00006C264.795 5.09962 264.753 2.61068 261.746 2.489C175.096 -0.962325 86.9432 -1.06188 0.48167 3.70582C-0.144863 3.739 -0.165748 4.23679 0.48167 4.22573Z" fill="currentColor"/>
                                                    </svg>
                                                    <br />{item.title_2}</h3>
                                                <div className="tp-hero-3-btn">
                                                    <Link className="tp-btn-2" href="/about">LEARN MORE</Link>
                                                </div>
                                            </div>
                                            </div>
                                        </div>
                                        <div className="tp-hero-3-bottom p-relative d-none d-md-block">
                                            <h3 className="tp-hero-3-bottom-title">{item.bottom_title}</h3>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </SwiperSlide>  
                    )} 
                </Swiper>
                <div className="tp-hero-3-nav d-none d-xl-block">
                    <button type="button" className="hero-button-prev-1 tp-btn-hover-clear alt-color">
                        <i className="fa-regular fa-arrow-left"></i>
                    <b></b>
                    </button>
                    <button type="button" className="hero-button-next-1 tp-btn-hover-clear alt-color">
                        <i className="fa-regular fa-arrow-right"></i>
                    <b></b>
                    </button>
                </div>
            </section>
        </>
    );
};

export default HeroArea;