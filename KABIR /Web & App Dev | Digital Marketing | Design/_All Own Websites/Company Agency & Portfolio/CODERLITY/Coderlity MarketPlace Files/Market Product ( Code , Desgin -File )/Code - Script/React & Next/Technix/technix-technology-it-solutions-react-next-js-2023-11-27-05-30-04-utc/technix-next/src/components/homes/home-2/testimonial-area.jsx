import React from 'react';
import Image from 'next/image';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// import shape here 
import testimonial_shape_1 from "@assets/img/testimonial/shape-blur.png";
import testimonial_shape_2 from "@assets/img/testimonial/shape-2.png";
import testimonial_shape_3 from "@assets/img/testimonial/shape-3.png";
import testimonial_shape_4 from "@assets/img/testimonial/shape-4.png";
import testimonial_shape_5 from "@assets/img/testimonial/shape-blur.png";

import quot from "@assets/img/testimonial/quot-2.png";
import LeftArrowBtn from '@/src/svg/left-arrow-btn';
import RightArrowBtn from '@/src/svg/right-arrow-btn';



const testimonial_data = [
    {
        id: 1, 
        name: "Hahimlam Dirat",
        title: "Web Developer",
        description: <>“It is wanting to come here and afterward Our office is something We consider it the little we are pleased with. magnet; difficult to leave it. <br /> Our office is additionally a big name.”</>
    },
    {
        id: 2, 
        name: "Akuma Till",
        title: "ui/ux Developer",
        description: <>“A big name Our office is additionally . Our office is something <br /> we are pleased with. We consider it the little  magnet;  <br />it is wanting to come here and afterward difficult to leave it.”</>
    },
    {
        id: 3, 
        name: "Moktir Rahman",
        title: "Graphics Developer",
        description: <>“Our office is something we are pleased with. We consider it the little <br /> magnet; it is wanting to come here and afterward difficult to leave it. <br /> Our office is additionally a big name.”</>
    },

]

const setting = {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    centeredSlides: true,
    // Navigation arrows
    navigation: {
        nextEl: ".testimonial-button-next-1",
        prevEl: ".testimonial-button-prev-1",
    },
    }

const TestimonialArea = () => {
    return (
        <>
            <section className="tp-testimonial-2-area p-relative pt-150 pb-120">
            <div className="tp-testimonial-2-shape">
               <Image className="shape-1" src={testimonial_shape_1} alt="theme-pure" />
               <Image className="shape-2" src={testimonial_shape_2} alt="theme-pure" />
               <Image className="shape-3" src={testimonial_shape_3} alt="theme-pure" />
               <Image className="shape-4" src={testimonial_shape_4} alt="theme-pure" />
               <Image className="shape-5" src={testimonial_shape_5} alt="theme-pure" />
            </div>
            <div className="tp-testimonial-2-np">
               <span className="prev"></span>
               <span className="next"></span>
            </div>
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-lg-8">

                     <div className="circle-animation business">
                        <div className="circle-animation business-2">
                           <span className="tp-circle-8"></span>
                           <span className="tp-circle-6"></span>
                        <div className="circle-animation business-3">
                           <span className="tp-circle-7"></span>
                        </div>
                        <div className="circle-animation business-4">
                           <span className="tp-circle-5"></span>
                        </div>
                        </div>
                     </div>

                     <Swiper {...setting} modules={[Navigation]} className="testimonial-2-active swiper-container">
                        {testimonial_data.map((item, i)  => 
                            <SwiperSlide key={i} className="swiper-slide">
                                <div className="testimonial-item">
                                    <div className="tp-testimonial-2-content">
                                        <div className="tp-testimonial-2-thumb text-center">
                                            <Image src={quot} alt="theme-pure" />
                                        </div>
                                        <div className="tp-testimonial-2-info">
                                            <h4 className="tp-testimonial-2-info-title text-center">{item.name}</h4>
                                            <p className="tp-testimonial-2-info-designation text-center">({item.title})</p>
                                        </div>
                                        <div className="tp-testimonial-2-text text-center">
                                            <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>                        
                        )} 
                     </Swiper>

                     <div className="tp-testimonial-2-nav d-none d-lg-block">
                        <button type="button" className="testimonial-button-prev-1">
                            <span>
                            <LeftArrowBtn />
                           </span>
                           </button>
                        <button type="button" className="testimonial-button-next-1">
                            <span> 
                           <RightArrowBtn />
                           </span>
                           </button>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        </>
    );
};

export default TestimonialArea;