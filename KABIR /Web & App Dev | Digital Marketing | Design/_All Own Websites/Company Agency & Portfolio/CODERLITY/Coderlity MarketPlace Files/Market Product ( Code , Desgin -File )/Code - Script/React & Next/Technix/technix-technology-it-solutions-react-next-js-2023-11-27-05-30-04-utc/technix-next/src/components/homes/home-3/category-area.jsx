import Link from 'next/link';
import Image from 'next/image';
import AngleArrow from '@/src/svg/angle-arrow';
import React, { useEffect, useRef, useState } from 'react';


import  category_shape_1 from "@assets/img/category/shape-1.png";
import  category_shape_2 from "@assets/img/category/shape-2.png";

import category_icon_1 from "@assets/img/category/icon-1.png";
import category_icon_2 from "@assets/img/category/icon-2.png";
import category_icon_3 from "@assets/img/category/icon-3.png";
import category_icon_4 from "@assets/img/category/icon-4.png";
import category_icon_5 from "@assets/img/category/icon-5.png";

const CategoryArea = () => {

    const [x, setX] = useState(1);
    const [y, setY] = useState(1);
    const mouseRef = useRef(null);
  
    useEffect(() => {
      const handleMouseMove = (e) => {
        const r = mouseRef.current.getBoundingClientRect();
        setX(e.clientX - (r.left + Math.floor(r.width / 2)));
        setY(e.clientY - (r.top + Math.floor(r.height / 2)));
      };
  
      const handleMouseLeave = () => {
        setX(1);
        setY(1);
      };
  
      const mouseElem = mouseRef.current;
      mouseElem.addEventListener('mousemove', handleMouseMove);
      mouseElem.addEventListener('mouseleave', handleMouseLeave);
  
      return () => {
        mouseElem.removeEventListener('mousemove', handleMouseMove);
        mouseElem.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, []);


    return (
        <>
             <section id="mousemove" ref={mouseRef} style={{ '--x': x, '--y': y }}
             className="tp-category-area p-relative fix pt-120 pb-120">
                <div className="tp-category-shape">
                    <Image className="shape-1 mousemove__image" src={category_shape_1} alt="theme-pure" />
                    <Image className="shape-2 mousemove__image" src={category_shape_2} alt="theme-pure" />
                <span className="shape-3"> 
                    <svg width="1093" height="128" viewBox="0 0 1093 128" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 50.9659C56.3481 18.4898 187.969 -31.1736 271.668 29.9813C376.292 106.425 498.092 148.394 553.787 115.918C609.482 83.4422 719.311 -19.4825 816.127 29.9813C912.943 79.4452 896.286 151.392 1092 110.422" stroke="currentColor"/>
                    </svg>
                </span>
                </div>
                <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-category-title-wrapper text-center">
                            <span className="tp-section-title__pre">
                            feature <span className="title-pre-color">IT Solutions</span>
                            <AngleArrow /> 
                            </span>
                            <h3 className="tp-section-title">
                                Best Digital <span className="title-color">Technology</span> <br /> Agency For People
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-5 col-lg-5 col-md-6">
                        <div className="tp-category-content-wrapper d-flex">
                            <div className="tp-category-content one">
                            <div className="tp-category-icon">
                                <Image src={category_icon_1} alt="theme-pure" />
                                <h4 className="tp-category-content-title">Consulting</h4>
                            </div>
                            </div>
                            <div className="tp-category-content two">
                            <div className="tp-category-icon">
                                <Image src={category_icon_2} alt="theme-pure" />
                                <h4 className="tp-category-content-title">Software</h4>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-2 col-lg-2 col-md-4 order-3 order-md-2">
                        <div className="tp-category-content-wrapper d-flex">
                            <div className="tp-category-content three">
                            <div className="tp-category-icon">
                                <Image src={category_icon_3} alt="theme-pure" />
                                <h4 className="tp-category-content-title">Data <br /> services</h4>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 order-2 order-md-3">
                        <div className="tp-category-content-wrapper d-flex">
                            <div className="tp-category-content four">
                            <div className="tp-category-icon">
                                <Image src={category_icon_4} alt="theme-pure" />
                                <h4 className="tp-category-content-title">Cyber security</h4>
                            </div>
                            </div>
                            <div className="tp-category-content five">
                            <div className="tp-category-icon">
                                <Image src={category_icon_5} alt="theme-pure" />
                                <h4 className="tp-category-content-title">Education</h4>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-offer-all-btn text-center mt-50">
                            <p>Bring them together and you overcome the ordinary. 
                                <Link href="/service-details">
                                    View More SErvice <span><i className="fa-regular fa-plus"></i></span>
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default CategoryArea;