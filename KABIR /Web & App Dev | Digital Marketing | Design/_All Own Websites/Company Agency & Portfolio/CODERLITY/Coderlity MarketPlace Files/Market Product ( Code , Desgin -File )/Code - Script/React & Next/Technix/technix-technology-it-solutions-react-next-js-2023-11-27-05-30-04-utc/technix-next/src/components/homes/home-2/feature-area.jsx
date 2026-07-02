import React, {useRef} from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Splide, SplideSlide } from '@splidejs/react-splide';

import feature_img_1 from "@assets/img/feature/home-2/img-2.jpg";
import feature_img_2 from "@assets/img/feature/home-2/img-3.jpg";
import feature_img_3 from "@assets/img/feature/home-2/img-1.jpg";



  const feature_slide_data = [
    {
        id: 1, 
        img: feature_img_1,
        subtitle: "Project no:2",
        title: "Artificial intelligence",
    },
    {
        id: 2, 
        img: feature_img_2,
        subtitle: "Project no:3",
        title: "Modern Web Design",
    },
    {
        id: 3, 
        img: feature_img_3,
        subtitle: "Project no:1",
        title: "App Design",
    },
  ]

const FeatureArea = () => {

    const setting = {
        type   : 'loop',
        pagination: false,
        arrows: false,
        focus: 'center',
        perPage: 1,
        gap:'30px',
        padding: '25%',
        throttle: 300,
        breakpoints: {
            991: {
                padding: '15%'
            },
            765: {
                padding: '12%',
                gap:'25px',
            },
            575: {
                arrows: false,
                padding: '0%',
            },
          },
      }
   const splideRef = useRef(null); 


    return (
        <>
            <section className="tp-feature-area-2">
                <div className="container-fluid gx-0">
                    <div className="row gx-0">
                        <div className="col-lg-12">
                            <Splide options={setting} ref={splideRef} 
                            className="tp-feature-active-2 pt-35 splide wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"> 
                                    {feature_slide_data.map((item, i)  =>
                                        <SplideSlide key={i}>
                                            <div className="tp-feature-thumb-2 w-img p-relative">
                                            <Link href="/portfolio-details">
                                                <Image src={item.img} alt="theme-pure" />
                                            </Link>
                                            <div className="tp-feature-2-info d-flex align-items-center p-relative">
                                                <div className="tp-feature-2-title-wrapper">
                                                    <span className="tp-feature-2-title-sub">{item.subtitle}</span>
                                                    <h4 className="tp-feature-2-title">
                                                        <Link href="/portfolio-details">{item.title}</Link>
                                                    </h4>
                                                </div>
                                                <div className="tp-feature-2-btn">
                                                    <Link href="/portfolio-details">
                                                        <i className="fa-regular fa-arrow-up-right"></i>
                                                    </Link>
                                                </div>
                                            </div>
                                            </div>
                                        </SplideSlide>
                                    )} 
                            </Splide>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default FeatureArea;