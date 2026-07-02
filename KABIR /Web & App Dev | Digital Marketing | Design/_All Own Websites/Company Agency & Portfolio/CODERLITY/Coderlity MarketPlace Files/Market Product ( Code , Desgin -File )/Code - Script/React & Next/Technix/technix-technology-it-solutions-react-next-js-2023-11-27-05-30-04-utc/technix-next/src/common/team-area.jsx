import Link from 'next/link';
import Image from 'next/image';
import { Navigation } from 'swiper';
import team_data from '@/src/data/team-data';
import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 

import PlusIcon from '@/src/svg/plus-icon';
import AngleArrow from '@/src/svg/angle-arrow';
import team_shape_1  from "@assets/img/testimonial/home-3/shape-3.png";
import { SocialLinksTwo } from '@/src/common/social-links';

const setting = {
    slidesPerView: 5,
    spaceBetween: 25,   
    navigation: {
        nextEl: ".team-button-next-1",
        prevEl: ".team-button-prev-1",
    },
    breakpoints: {
        '1400':{
            slidesPerView: 5,
        },
        '1200':{
            slidesPerView: 4,
        },
        '992':{
            slidesPerView:3,
        },
        '767': {
            slidesPerView:3,
        },
        '576': {
            slidesPerView:2,
        },
        '0': {
            slidesPerView:1,
        },
        },
}

const TeamArea = () => {

    const [isLoop, setIsLoop] = useState(false)
    useEffect(() => {
     setIsLoop(true)
    }, []) 
    
    return (
        <>
            <section className="tp-team-area p-relative pb-100">
                <div className="tp-team-shape">
                    <Image src={team_shape_1} alt="theme-pure" />
                </div>
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="tp-team-title-wrapper">
                                <span className="tp-section-title__pre">
                                best <span className="title-pre-color">IT Solutions</span>
                                <AngleArrow /> 
                                </span>
                                <h3 className="tp-section-title">Best Digital 
                                <span className="title-color">
                                    Technology
                                </span> <br /> Agency For People
                                </h3>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tp-team-nav d-flex justify-content-start justify-content-lg-end align-items-end mb-30">
                                <button type="button"  
                                className="team-button-prev-1 tp-btn-hover-clear alt-color" 
                                tabIndex="-1" aria-label="Previous slide">
                                    <i className="fa-regular fa-arrow-left"></i>
                                <b></b>
                                </button>
                                <button type="button" className="team-button-next-1 tp-btn-hover-clear alt-color" 
                                tabIndex="-1" aria-label="Next slide">
                                    <i className="fa-regular fa-arrow-right"></i>
                                <b></b>
                                </button> 
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <Swiper {...setting}  loop={isLoop} modules={[Navigation]} className="team-active swiper-container">
                            {team_data.map((item, i) =>  
                                <SwiperSlide key={i}>
                                    <div className="tp-team-wrapper p-relative">
                                        <div className="tp-team-wrapper-thumb">
                                            <Link href="/team-details">
                                                <Image src={item.img} alt="theme-pure" />
                                            </Link>
                                            <div className="tp-team-social-info"> 
                                                <SocialLinksTwo /> 
                                            </div>
                                        </div>
                                        <div className="tp-team-wrapper-content d-flex align-items-center justify-content-between">
                                            <div className="tp-team-wrapper-content-text">
                                                <h3 className="team-title"><Link href="/team-details">{item.name}</Link></h3>
                                                <p>{item.job_title}</p>
                                            </div>
                                            <div className="tp-team-wrapper-icon">
                                                <span className="tp-team-social">
                                                    <PlusIcon /> 
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )}
                        </Swiper>
                    </div>
                </div>                
            </section>
        </>
    );
};

export default TeamArea;