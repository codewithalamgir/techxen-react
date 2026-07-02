import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EmailIcon from '@/src/svg/email-icon';
import AngleArrow from '@/src/svg/angle-arrow';
// shape import here
import cta_shape_1 from "@assets/img/cta/img.png";
import cta_shape_2 from "@assets/img/cta/img-2.png";
import cta_shape_3 from "@assets/img/cta/bg.png";

const cta_content = {
    phone: "",
}

const CtaArea = () => {
    return (
        <>
           <section className="tp-cta-2-area p-relative pt-200 pb-90" style={{backgroundImage: `url(/assets/img/cta/bg-shape.png)`}}>
            <div className="tp-cta-2-shape">
               <Image className="shape-1" src={cta_shape_1} alt="theme-pure" />
               <Image className="shape-2" src={cta_shape_2} alt="theme-pure" />
               <Image className="shape-3" src={cta_shape_3} alt="theme-pure" />
            </div> 
            <div className="container">
               <div className="row justify-content-center">
                  <div className="col-xl-4 col-lg-6">
                     <div className="tp-cta-2-content text-center">
                        <div className="tp-cta-2-content-icon">
                           <span>
                            <EmailIcon />                             
                           </span>
                        </div>
                        <div className="tp-cta-2-content-inner">
                           <h3 className="cta-title"><a href="tel:01900678956">0208 446 4695</a></h3>
                           <a href="mailto:themepure.co.uk">themepure.co.uk</a>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-6 col-lg-6">
                     <div className="tp-cta-2-title-wrapper">
                        <span className="tp-section-title__pre">
                           feature <span className="title-pre-color">IT Solutions</span>
                           <AngleArrow /> 
                        </span>
                        <h3 className="tp-section-title">
                            We’re Ready to <span className="title-color">Growth</span> IT Business 
                        </h3>
                        <div className="tp-cta-2-btn">
                           <Link className="tp-btn" href="/contact">Get a Free Quatre</Link>
                        </div>
                     </div>
                  </div>
                  <div className="col-xl-2 "></div>
               </div>
            </div>
         </section> 
        </>
    );
};

export default CtaArea;