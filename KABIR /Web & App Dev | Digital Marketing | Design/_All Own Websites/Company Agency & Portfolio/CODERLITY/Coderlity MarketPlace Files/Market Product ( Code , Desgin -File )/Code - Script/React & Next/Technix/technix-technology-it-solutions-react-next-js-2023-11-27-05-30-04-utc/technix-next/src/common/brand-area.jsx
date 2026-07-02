import Image from 'next/image';
import { Navigation } from 'swiper';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import brand_img_1 from "@assets/img/brand/home-3/brand-1.png";
import brand_img_2 from "@assets/img/brand/home-3/brand-2.png";
import brand_img_3 from "@assets/img/brand/home-3/brand-3.png";
import brand_img_4 from "@assets/img/brand/home-3/brand-4.png";
import brand_img_5 from "@assets/img/brand/home-3/brand-5.png";

const brand_img = [brand_img_1, brand_img_2, brand_img_3, brand_img_4, brand_img_5, brand_img_1, brand_img_2, brand_img_3, brand_img_4, brand_img_5,]

const setting = {
    slidesPerView: 5,
    autoplay: {
        delay: 100,
    },
    autoplay : true,
    breakpoints: {
        '1200': {
            slidesPerView: 5,
        },
        '992': {
            slidesPerView: 4,
        },
        '768': {
            slidesPerView: 3,
        },
        '576': {
            slidesPerView: 2,
        },
        '0': {
            slidesPerView: 1,
        },
    },
}

const BrandArea = ({service}) => {
    const [isLoop, setIsLoop]  = useState(false)
    useEffect(() => {
       setIsLoop(true)
    }, [])
    
    return (
        <>
        {/* tp-brand-3-area breadcrumb-brand p-relative pt-65 pb-60 */}
             <div className={`tp-brand-3-area p-relative ${service ? "breadcrumb-brand" : ""} pt-65 pb-60`}>
                <div className="tp-brand-3-right-color"></div>
                    <div className="container">
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-brand-3-wrapper">
                                <Swiper 
                                {...setting}
                                loop={isLoop}
                                modules={Navigation}
                                className="brand-3-active swiper-container">
                                    {brand_img.map((item, i) => 
                                        <SwiperSlide key={i}>
                                            <div className="tp-brand-3-thumb">
                                                <Image src={item} alt="theme-pure" />
                                            </div>
                                        </SwiperSlide>
                                    )} 
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BrandArea;