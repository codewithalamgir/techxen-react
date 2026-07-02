import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import brand_img_1 from "@assets/img/brand/home-2/shape-1.png";
import brand_img_2 from "@assets/img/brand/home-2/shape-2.png";
import brand_img_3 from "@assets/img/brand/home-2/shape-3.png";
import brand_img_4 from "@assets/img/brand/home-2/shape-4.png";
import brand_img_5 from "@assets/img/brand/home-2/shape-5.png";

const BrandArea = () => {
    return (
        <>
            <div className="tp-brand-2-area p-relative pt-120 pb-80">
            <div className="tp-brand-2-bg" style={{backgroundImage: `url(/assets/img/brand/home-2/shape-bg.png)`}}></div>
            <div className="container">

               <div className="row">
                  <div className="col-lg-5 col-md-4">
                     <div className="tp-brand-2-item">
                        <Image className="shape-1" src={brand_img_1} alt="theme-pure" />
                        <Image className="shape-2" src={brand_img_2} alt="theme-pure" />
                     </div>
                  </div>
                  <div className="col-lg-2 col-md-4 order-sm-3 order-md-2">
                     <div className="tp-brand-2-item">
                        <Image className="shape-3" src={brand_img_3} alt="theme-pure" />
                     </div>
                  </div>
                  <div className="col-lg-5 col-md-4 order-sm-2 order-md-3">
                     <div className="tp-brand-2-item">
                        <Image className="shape-4" src={brand_img_4} alt="theme-pure" />
                        <Image className="shape-5" src={brand_img_5} alt="theme-pure" />
                     </div>
                  </div>
               </div>

               <div className="row justify-content-center pt-80">
                  <div className="col-lg-8">
                     <div className="tp-brand-2-trend text-center">
                        <p>
                            <i className="fa-regular fa-arrow-right-long"></i> IMPROVE AND INNOVATE WITH THE 
                            <Link href="/portfolio"> TECH TRENDS</Link> 
                            <i className="fa-regular fa-arrow-left-long"></i>
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        </>
    );
};

export default BrandArea;