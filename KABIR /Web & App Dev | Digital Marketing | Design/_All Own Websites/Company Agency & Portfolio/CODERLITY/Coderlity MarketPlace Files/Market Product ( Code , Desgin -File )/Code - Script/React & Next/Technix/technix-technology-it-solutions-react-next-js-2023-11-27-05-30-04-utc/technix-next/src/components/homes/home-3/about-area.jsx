import Image from 'next/image';
import Link from "next/link";
import React,{useState} from 'react';
import AngleArrow from '@/src/svg/angle-arrow';
import VideoPopup from '@/src/modals/video-popup';
// about img import here
import about_img_1 from "@assets/img/about/home-3/shape-4.png";
import about_img_2 from "@assets/img/about/home-3/img-1.jpg";
import about_img_3 from "@assets/img/about/home-3/img-2.jpg";
import about_img_4 from "@assets/img/about/home-3/img-3.jpg";
// about shape import here
import about_shape_1 from "@assets/img/about/home-3/shape-1.png";
import about_shape_2 from "@assets/img/about/home-3/shape-2.png";
import about_shape_3 from "@assets/img/about/home-3/shape-3.png"; 
// import progressbar   
import { CircularProgressbar} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import about_img from "@assets/img/about/about-1.png";
import about_img_10 from "@assets/img/business/shape-5.png";


const AboutArea = ({about}) => {
    const percentage = 50;
    const percentage2 = 75;
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className={`${about ? "tp-about-breadcrumb pt-100 pb-90" : "tp-about-3-area pt-185 pb-170"} p-relative`}>
                {about ? 
                <div className="tp-about-3-shape d-none d-lg-block">
                    <Image src={about_img_10} alt="theme-pure" />
                </div>
                :
                <div className="shape-bg">
                    <Image src={about_img_1} alt="theme-pure" />
                </div> 
               }                
                <div className="container">
                <div className="row">
                    {about ?  
                    <div className="col-lg-6">
                        <div className="tp-about-breadcrumb-img p-relative text-center fadeLeft">
                            <Image src={about_img} alt="theme-pure" />
                        </div> 
                    </div>  
                    :  
                    <div className="col-lg-6">
                        <div className="tp-about-3-img p-relative fadeLeft">
                            <Image src={about_img_2} alt="theme-pure" />
                            <Image className="shape-1" src={about_img_3} alt="theme-pure" />
                            <div className="shape-2 p-relative">
                            <Image src={about_img_4} alt="theme-pure" />
                            <div className="tp-video-play">
                                <a className="popup-video" 
                                onClick={() => setIsVideoOpen(true)}>
                                    <i className="fa-sharp fa-solid fa-play"></i>
                                </a>
                            </div>
                            </div>
                            <Image className="shape-3" src={about_shape_1} alt="theme-pure" />
                            <Image className="shape-4" src={about_shape_2} alt="theme-pure" />
                            <Image className="shape-5" src={about_shape_3} alt="theme-pure" />
                        </div>
                    </div>
                    }

                    <div className="col-lg-6">
                        <div className="tp-about-3-wrapper">
                            <div className="tp-about-3-title-wrapper"> 
                                <span className="tp-section-title__pre">
                                    about <span className="title-pre-color">IT Solutions</span>
                                    <AngleArrow /> 
                                </span>
                                <h3 className="tp-section-title">
                                    Best Digital <span className="title-color">Technology</span> <br /> Agency For People
                                </h3> 
                            </div>
                            <p className="text">
                                Transmax is the world’s driving worldwide coordinations supplier — we <br /> uphold industry and exchange the worldwide trade of merchandise <br /> through land transport.
                            </p>
                            <div className="tp-about-progressbar-inner d-flex flex-wrap pt-20">
                            <div className="tp-about-3-progressbar d-flex align-items-center">
                                <div className="circular tl-progress"> 
                                    <CircularProgressbar
                                    value={percentage}
                                    text={`${percentage}%`}
                                    strokeWidth={5}   
                                    className="knob"
                                    />
                                </div>
                                <div className="tp-about-3-progressbar-title">
                                    <p>Business <br /> Strategy Growth</p>
                                </div>
                            </div>
                            <div className="tp-about-3-progressbar d-flex align-items-center">
                                <div className="circular tl-progress"> 
                                    <CircularProgressbar
                                    value={percentage2}
                                    text={`${percentage2}%`}
                                    strokeWidth={5} 
                                    />
                                </div>
                                <div className="tp-about-3-progressbar-title">
                                    <p>Health Valuable <br /> Ideas</p>
                                </div>
                            </div>
                            </div>
                            <div className="tp-about-3-btn-inner d-flex flex-wrap">
                            <div className="tp-about-btn ">
                                <Link className="tp-btn" href="/about">Our History 
                                    <i className="fa-regular fa-arrow-right-long"></i>
                                </Link>
                            </div>
                            <div className="tp-about-3-year">
                                <p>
                                    BRENDON GARREY
                                    <br />
                                    <span>
                                        mayor, since 21st Oct , 2019
                                    </span>
                                </p>
                            </div>
                            </div>
                        </div>
                    </div>

                </div>
                </div>
            </section>

         {/* video modal start */}
        <VideoPopup 
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"csnD5EVL5z8"}
        />
      {/* video modal end */}
        </>
    );
};

export default AboutArea;