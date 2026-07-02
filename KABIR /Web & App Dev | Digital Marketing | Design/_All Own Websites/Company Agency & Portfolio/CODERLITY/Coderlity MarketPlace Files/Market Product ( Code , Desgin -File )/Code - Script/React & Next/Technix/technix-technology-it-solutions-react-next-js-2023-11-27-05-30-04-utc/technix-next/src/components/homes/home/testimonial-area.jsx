import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react'; 
import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';

import shape_img from "@assets/img/testimonial/shape-1.png";
import bg_img from "@assets/img/testimonial/testimonial-bg.jpg";
import  user_1 from "@assets/img/testimonial/user-1.jpg";
import  user_2 from "@assets/img/testimonial/user-2.jpg";
import  user_3 from "@assets/img/testimonial/user-3.jpg"; 
import Image from 'next/image';

const setting =  {
    slidesPerView: 3,
    spaceBetween: 30, 
    loop: true,
    centeredSlides: true,
    breakpoints: {
        '991': {
        },
        '768': {
            slidesPerView:2,
        },
        '767': {
            slidesPerView:1,
            spaceBetween:15,
        },
        '576': {
            slidesPerView:1,
        },
        '0': {
            slidesPerView:1,
        },
        },
    }

const testimonial_data = [
    {
        id: 1, 
        avatar: user_1,
        name: "Cameron Williamson",
        title: "Ceo & Founder",
        description: <>are so beguiled and demorali ed by the <br />
        tech of pleasure of the moment Dislike <br />
        men who are so beguiled and demoraliz <br />
        worlds ed by the charms of </>,
    },
    {
        id: 2, 
        avatar: user_2,
        name: "Leslie Alexander",
        title: "Ceo & Founder",
        description: <>are so beguiled and demorali ed by the <br />
        tech of pleasure of the moment Dislike <br/>
        men who are so beguiled and demoraliz <br/>
        worlds ed by the charms of </>,
    },
    {
        id: 3, 
        avatar: user_3,
        name: "Savannah Nguyen",
        title: "Ceo & Founder",
        description: <>are so beguiled and demorali ed by the <br />
        tech of pleasure of the moment Dislike <br/>
        men who are so beguiled and demoraliz <br/>
        worlds ed by the charms of </>,
    },
    {
        id: 4, 
        avatar: user_1,
        name: "Cameron Williamson",
        title: "Ceo & Founder",
        description: <>are so beguiled and demorali ed by the <br />
        tech of pleasure of the moment Dislike <br/>
        men who are so beguiled and demoraliz <br/>
        worlds ed by the charms of </>,
     },
    {
        id: 5, 
        avatar: user_2,
        name: "Leslie Alexander",
        title: "Ceo & Founder",
        description: <>are so beguiled and demorali ed by the <br />
        tech of pleasure of the moment Dislike <br/>
        men who are so beguiled and demoraliz <br/>
        worlds ed by the charms of </>,
    },
    {
        id: 6, 
        avatar: user_3,
        name: "Savannah Nguyen",
        title: "Ceo & Founder",
        description: <>are so beguiled and demorali ed by the <br />
        tech of pleasure of the moment Dislike <br/>
        men who are so beguiled and demoraliz <br/>
        worlds ed by the charms of </>,
    },
]

const TestimonialArea = () => {    

    return (
        <> 

           <section className="tp-testimonial-area p-relative pb-55">
            <div className="container container-large">
               <div className="tp-testimonial-shape">
                  <Image src={shape_img} alt="theme-pure" />
               </div>
               <div className="tp-testimonial-bg">
                  <Image src={bg_img} alt="theme-pure" />
               </div>
               <div className="row">
                  <div className="col-lg-12">
                     <div className="tp-testimonial-title-wrapper text-center">
                        <span className="tp-section-title__pre">
                           Client’s <span className="title-pre-color">Feedback
                           </span>
                           <AngleArrow /> 
                        </span>
                        <h3 className="tp-section-title">All Professional <span className="title-color">Testimonial</span>
                           & Feedback
                           <span className="title-center-shape"> 
                                 <LineArrowTwo />
                           </span>
                        </h3>
                     </div>
                  </div>
                  <div className="tp-testimonial-box-wrapper">
                     <div className="testimonial-active swiper-container">
                        <Swiper {...setting}>
                            {testimonial_data.map((item, i)  => 
                                    <SwiperSlide key={i} className="tp-testimonial-item text-center mb-30">
                                    <div className="tp-testimonial-item-inner">
                                        <div className="tp-testimonial-quot">
                                            <span>
                                                <svg width="45" height="35" viewBox="0 0 45 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.9973 0.631122L16.7189 3.11787C12.7647 5.36549 10.3073 7.90914 8.77102 10.386C7.17389 12.961 6.58902 15.4368 6.33023 17.3777L6.19305 18.4066L7.08309 17.8726C8.22226 17.1891 9.86775 16.9388 11.5585 17.1804L11.5662 17.1815L11.574 17.1823C15.8927 17.6622 19.2191 21.0061 19.2191 25.5337C19.2191 27.659 18.2736 29.8166 16.8239 31.5139C15.16 33.1714 13.2726 33.882 10.8708 33.882C8.23854 33.882 5.83892 32.6833 4.40682 31.2559C1.96161 28.5633 0.5 25.6485 0.5 20.7303C0.5 12.2579 6.47223 4.66787 14.9973 0.631122ZM40.2782 0.631121L41.9998 3.11787C38.0456 5.36549 35.5882 7.90914 34.0519 10.386C32.4548 12.961 31.8699 15.4368 31.6111 17.3777L31.474 18.4066L32.364 17.8726C33.5032 17.1891 35.1487 16.9388 36.8394 17.1804L36.8471 17.1815L36.8549 17.1823C41.1737 17.6622 44.5 21.0061 44.5 25.5337C44.5 27.6651 43.5491 29.8289 42.0923 31.5285C40.6996 33.1533 38.5856 33.882 36.1517 33.882C33.5194 33.882 31.1198 32.6833 29.6877 31.2559C27.2425 28.5633 25.7809 25.6485 25.7809 20.7303C25.7809 12.2579 31.7531 4.66787 40.2782 0.631121Z" stroke="currentColor"/>
                                                </svg>
                                            </span>
                                        </div>
                                        <p>{item.description}</p>
                                        <div className="tp-testimonial-rating d-flex justify-content-center">
                                            <span>
                                                <i className="fa-solid fa-star-sharp"></i>
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star-sharp"></i>
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star-sharp"></i>
                                            </span>
                                            <span>
                                                <i className="fa-solid fa-star-sharp"></i>
                                            </span>
                                            <span>
                                                <i className="fa-regular fa-star-half-stroke"></i>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="tp-testimonial-user-thumb">
                                        <Image src={item.avatar} alt="theme-pure" />
                                    </div>
                                    <div className="tp-testimonial-designation">
                                        <h4 className="testimonial-title">{item.name}</h4>
                                        <p>{item.title}</p>
                                    </div>
                                    </SwiperSlide> 
                            )}
                        </Swiper> 

                     </div>
                  </div>
               </div>
            </div>
         </section> 
        </>
    );
};

export default TestimonialArea;