import Image from 'next/image';
import { Navigation } from 'swiper';
import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import feature_icon_1 from "@assets/img/feature/home-3/icon-1.png";
import feature_icon_2 from "@assets/img/feature/home-3/icon-2.png";
import feature_icon_3 from "@assets/img/feature/home-3/icon-3.png";
import feature_icon_4 from "@assets/img/feature/home-3/icon-4.png";
 
const feature_data = [
    {
        id: 1, 
        img: feature_icon_1,
        title: "Quick response",
        description: <>onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun</>,
    },
    {
        id: 2, 
        img: feature_icon_2,
        title: "perfect solutions",
        description: <>onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun</>,
    },
    {
        id: 3, 
        img: feature_icon_3,
        title: "No Geek Speeks",
        description: <>onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun</>,
    },
    {
        id: 4, 
        img: feature_icon_4,
        title: "100% Satisfaction",
        description: <>onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun</>,
    },
    {
        id: 5, 
        img: feature_icon_1,
        title: "Quick response",
        description: <>onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun</>,
    },
    {
        id: 6, 
        img: feature_icon_2,
        title: "perfect solutions",
        description: <>onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun</>,
    },
    {
        id: 7, 
        img: feature_icon_3,
        title: "No Geek Speeks",
        description: <>onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun</>,
    },
    {
        id: 8, 
        img: feature_icon_4,
        title: "100% Satisfaction",
        description: <>onec suscipit ante ipsum. Donec  quam at tortor hendrerit, ut ele  augue suscipit. Morbi tincidun</>,
    },
]

const setting = {
    slidesPerView: 4,
    spaceBetween: 30, 
    breakpoints: {
        '1700':{
            slidesPerView:4,
        },
        '1400':{
            slidesPerView:3,
        },
        '1200':{
            slidesPerView:2,
        },
        '767': {
            slidesPerView:2,
        },
        '576': {
            slidesPerView:1,
        },
        '0': {
            slidesPerView:1,
        },
        },
}
const FeatureArea = () => {
    const [isLoop, setIsLoop] = useState(false)
    useState(() => {
        setIsLoop(true)
    }, [])
    return (
        <>
            <section className="tp-feature-3-area pt-100" style={{backgroundImage: `url(/assets/img/feature/home-3/feature-bg.png)`}}>
            <div className="container-fluid gx-0">
               <div className="row gx-0">
                  <Swiper {...setting} modules={[Navigation]} loop={isLoop} className="feature-3-active swiper-container">
                    {feature_data.map((item, i) => 
                        <SwiperSlide key={i}>
                            <div className="tp-feature-3-content-inner d-flex align-items-center">
                            <div className="tp-feature-3-content-thumb">
                                <Image src={item.img} alt="theme-pure" />
                            </div>
                            <div className="tp-feature-3-content">
                                <h3 className="tp-feature-title">{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            </div>
                        </SwiperSlide>
                    )}
                  </Swiper>
               </div>
            </div>
            <div className="row gx-0">
               <div className="col-xl-12">
                  <div className="tp-feature-3-text-style text-center fadeUp pt-80">
                     <h3 className="feature-title" style={{backgroundImage: `url(/assets/img/feature/home-3/text-img.jpg)`}}>testimonial</h3>
                  </div>
               </div>
            </div>
         </section>
        </>
    );
};

export default FeatureArea;