import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; 
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from "swiper/react";

import blog_slide_img_1 from "@assets/img/blog/img-6.png";
import blog_slide_img_2 from "@assets/img/blog/img-5.png";

import blog_img_2 from "@assets/img/blog/img-4.png";
import blog_img_3 from "@assets/img/blog/img-5.png";


import shape_1 from "@assets/img/blog/shape-1.png";
import AngleArrow from '@/src/svg/angle-arrow'; 
import LineArrowTwo from '@/src/svg/line-arrow-2';

const blog_data = [
    // home 02 
    {
        id: 1, 
        // img: "",
        img_slide: [
            blog_slide_img_1, blog_slide_img_2

        ],
        category: "Rasalina",
        date: "02 Apr 2023",
        comments: "Comments (03)",
        title: <>Providing solutions for Industrial <br /> and restoration.</>,
    }, 
    {
        id: 2, 
        img: blog_img_2,
        category: "Donali",
        date: "02 Apr 2021",
        comments: "Comments (15)",
        title: <>Discovery incommode earnestly no he comm</>,
    },
    {
        id: 2, 
        img: blog_img_3,
        category: "Jon duo",
        date: "02 Apr 2021",
        comments: "Comments (18)",
        title: <>Technology information & solutions are just like…</>,
    },

]


const setting = {
    slidesPerView: 1,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: ".blog-button-next-1",
        prevEl: ".blog-button-prev-1",
    },
}

const BlogArea = () => {
    return (
        <>
            <section className="tp-blog-2-area p-relative pt-120">
                <div className="tp-blog-2-shape">
                    <div className="shape-1">
                        <Image src={shape_1} alt="theme-pure" />
                    </div>
                </div>
                <div className="container">
                    <div className="row">

                        <div className="col-lg-12">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                <div className="tp-blog-2-title-wrapper">
                                    <span className="tp-section-title__pre">
                                        Blog & <span className="title-pre-color">News</span>
                                        <AngleArrow /> 
                                    </span>
                                    <h3 className="tp-section-title">Industries Blog & News
                                        <span className="title-left-shape"> 
                                            <LineArrowTwo />
                                        </span>
                                    </h3>
                                </div>
                                </div>
                                <div className="col-lg-6">
                                <div className="tp-blog-text justify-content-start justify-content-lg-end d-flex">
                                    <p>As the complexity of buildings to increase, the field of architecture 
                                        <br /> became multi-disciplinary with technological expertise.</p>
                                </div>
                                </div>
                            </div>
                        </div>

                        {blog_data.map((item, i) => 
                              <div key={i} className="col-lg-4 col-md-6">

                              <div className="tp-blog-2-wrapper mb-30">
                                  <div className="tp-blog-2-thumb">
                                    {item.img &&
                                        <Link href="/blog-details">
                                            <Image src={item?.img} alt="theme-pure" />
                                        </Link> 
                                    }
                                    {item.img_slide &&
                                    <>                                   
                                        <Swiper {...setting} modules={[Navigation]} className="blog-img-active swiper-container"> 
                                            {item.img_slide.map((slide, index) =>
                                                <SwiperSlide key={index}>
                                                    <Link href="/blog-details">
                                                        <Image src={slide} alt="theme-pure" />
                                                    </Link> 
                                                </SwiperSlide>                                            
                                            )} 
                                      </Swiper>
                                       <div className="tp-blog-2-nav">
                                            <button type="button" className="blog-button-prev-1"><i className="fa-light fa-arrow-left-long"></i>
                                            <b></b>
                                            </button>
                                            <button type="button" className="blog-button-next-1"><i className="fa-light fa-arrow-right-long"></i>
                                            <b></b>
                                            </button>
                                        </div>
                                        </>
                                    }
                                  <div className="tp-blog-2-tag-name">
                                      <p>By: {item.category}</p>
                                  </div>
                                  </div>
                                  <div className="tp-blog-2-content">
                                  <div className="tp-blog-2-details">
                                      <div className="tp-blog-date">
                                          <span><i className="fa-light fa-calendar-days"></i> {item.date} </span>
                                          <span>-</span>
                                          <span><i className="fa-sharp fa-solid fa-comments"></i> {item.comments}</span>
                                      </div>
                                  </div>
                                  <h3 className="tp-blog-2-title"><Link href="/blog-details">{item.title}</Link></h3>
                                  <div className="tp-blog-2-btn">
                                      <div className="read-more p-relative">
                                          <Link href="/blog-details">
                                             Read More <span><i className="fa-regular fa-arrow-right"></i></span>
                                          </Link>
                                      </div>
                                  </div>
                                  </div>
                              </div> 
                          </div> 
                        )} 
                    </div>
                </div>
            </section>
        </>
    );
};

export default BlogArea;