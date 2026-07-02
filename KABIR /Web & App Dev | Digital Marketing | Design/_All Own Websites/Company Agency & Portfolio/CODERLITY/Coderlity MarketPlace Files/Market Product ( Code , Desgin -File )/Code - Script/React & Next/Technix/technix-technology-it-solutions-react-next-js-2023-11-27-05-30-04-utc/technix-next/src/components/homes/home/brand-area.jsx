import Image from 'next/image';
import React, { useRef } from 'react';


import shape_1 from "@assets/img/brand/img-2.png";
import shape_2 from "@assets/img/brand/img-3.png";
import shape_3 from "@assets/img/brand/img-4.png";
import shape_4 from "@assets/img/brand/img-5.png";
import shape_5 from "@assets/img/brand/img-6.png";
import shape_6 from "@assets/img/brand/img-7.png";
import shape_7 from "@assets/img/brand/img-8.png";
import shape_8 from "@assets/img/brand/img-9.png"; 
import shape_9 from "@assets/img/brand/shape-3.png"; 

import brand_thumb from "@assets/img/brand/img-1.png"; 
import bg_shape from "@assets/img/brand/shape-1.png"; 

// shape data 
const shape_img =[
    { id: "1 mousemove__image", img: shape_1},
    { id: "2 mousemove__image", img: shape_2},
    { id: "3 mousemove__image", img: shape_3},
    { id: "4 mousemove__image", img: shape_4},
    { id: "5 mousemove__image", img: shape_5},
    { id: "6 mousemove__image", img: shape_6},
    { id: "7 mousemove__image", img: shape_7},
    { id: "8 mousemove__image", img: shape_8}, 
    { id: "9", img: shape_9}, 
]

const BrandArea = () => {
    const mouseRef = useRef(null);
    const handleMouseMove = (e) => {
      const r = mouseRef.current.getBoundingClientRect();
      mouseRef.current.style.setProperty(
        '--x',
        e.clientX - (r.left + Math.floor(r.width / 2))
      );
      mouseRef.current.style.setProperty(
        '--y',
        e.clientY - (r.top + Math.floor(r.height / 2))
      );
    };
  
    const handleMouseLeave = () => {
      mouseRef.current.style.setProperty('--x', 1);
      mouseRef.current.style.setProperty('--y', 1);
    };
  
    return (
        <>
        <div id="mousemove" ref={mouseRef} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="tp-brand-area pt-160 p-relative">
            <div className="container container-large">
               <div className="tp-brand-shape">
                  <Image className="bg-shape" src={bg_shape} alt="theme-pure" />
               </div>
               <div className="row">
                  <div className="col-lg-12">
                     <div className="tp-brand-wrapper">
                        <div className="tp-brand-shape">
                            {shape_img.map((item, i) => 
                            <Image key={i} className={`shape-${item.id}`} src={item.img} alt="theme-pure" />
                            )} 
                        </div>
                        <div className="tp-brand-thumb text-center fadeUp">
                           <Image src={brand_thumb} alt="theme-pure" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </>
    );
};

export default BrandArea;