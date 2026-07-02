import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import cta_shape_1 from "@assets/img/cta/home-3/shape-1.png";
import cta_call from "@assets/img/icon/call.svg";

const cta_content = {
    bg_img: "/assets/img/services/home-3/service-bg.png",
    title: <>We’re Ready to Growth <br /> IT Business</>,
    phone: "+88 1900 6789 56",
}
const {bg_img, title, phone} = cta_content



const CtaArea = () => {
    return (
        <>
            <section className="tp-cta-3-area pb-120" style={{backgroundImage: `url(${bg_img})`}}>
                <div className="container">
                <div className="row">
                    <div className="col-xl-12">
                        <div className="tp-cta-3-wrapper p-relative">
                            <div className="tp-cta-3-shape">
                            <Image src={cta_shape_1} alt="theme-pure" />
                            </div>
                            <div className="row">
                            <div className="col-lg-5">
                                <div className="tp-cta-3-title-wrapper p-relative">
                                    <h3 className="tp-cta-3-title">
                                        {title}
                                    </h3>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <div className="tp-cta-3-content-wrapper d-flex flex-wrap justify-content-start justify-content-lg-end">
                                    <div className="tp-cta-3-phone d-flex align-items-center">
                                        <div className="tp-cta-3-phone-icon">
                                        <Image src={cta_call} alt="theme-pure" />
                                        </div>
                                        <div className="tp-cta-3-phone-content">
                                        <span>Phone: <br /> <a href={`tel:${phone}`}>{phone}</a></span>
                                        </div>
                                    </div>
                                    <div className="tp-cta-3-btn">
                                        <Link className="tp-btn-3" href="/about">About Our Agency</Link>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default CtaArea;