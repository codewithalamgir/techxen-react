import React, {useRef} from 'react';
import icon from "@assets/img/icon/icon-1.png";
import Image from 'next/image';
import Slider from "react-slick";

const slider_data = [
    {id: 1,  title: <>Backup <span>Services</span></>},
    {id: 2,  title: <>Backup <span>Services</span></>},
    {id: 3,  title: <>Machine <span>Learning</span></>},
    {id: 4,  title: <>Programming <span>Learning</span></>},
    {id: 5,  title: <>website <span>Learning</span></>},
    {id: 6,  title: <>Graphics <span>Learning</span></>},
]

const setting = {
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
    initialSlide: 1,
    arrows: false,
    buttons: false,
    pauseOnFocus: false,
    pauseOnHover: true, 
  }

const SliderArea = () => {
    const sliderRef = useRef(null)
    return (
        <>
           <section className="tp-text-slider-area fix pt-100 pb-100">
            <div className="container-fluid gx-0">
              <div className="row gx-0">
               <div className="col-lg-12">
                  <div className="tp-text-slider">
                     <Slider {...setting} ref={sliderRef} className="tp-text-active">
                        {slider_data.map((item, i) => 
                            <div key={i} className="tp-text-item">
                                <div className="tp-text-slider-wrapper">
                                    <div className="tp-text-slider-item d-flex align-items-center">
                                        <Image src={icon} alt="theme-pure" />
                                        <h3 className="text-title">{item.title}</h3>
                                    </div>
                                </div>
                             </div>                        
                        )} 
                     </Slider>
                  </div>
               </div>
            </div>
            </div>
         </section> 
        </>
    );
};

export default SliderArea;