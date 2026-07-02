import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AngleArrow from '@/src/svg/angle-arrow';
// service icon import here
import service_icon_1 from "@assets/img/services/home-3/icon-1.png";
import service_icon_2 from "@assets/img/services/home-3/icon-2.png";
import service_icon_3 from "@assets/img/services/home-3/icon-3.png";
import service_icon_4 from "@assets/img/services/home-3/icon-4.png"; 

// service data
const service_data = [
    {
        id: 1,
        img: service_icon_1,
        title: <>It Server & <br /> Cyber Security</>,
        description: <>Transmax is the world tr  we uphold industry Customer Oriented</>
    },
    {
        id: 2,
        img: service_icon_2,
        title: <>Machine Learning <br /> And Ai</>,
        description: <>Transmax is the world tr  we uphold industry Customer Oriented</>
    },
    {
        id: 3,
        img: service_icon_3,
        title: <>It Server & <br /> Cyber Security</>,
        description: <>Transmax is the world tr  we uphold industry Customer Oriented</>
    },
    {
        id: 4,
        img: service_icon_4,
        title: <>Clouds Backup <br /> Services</>,
        description: <>Transmax is the world tr  we uphold industry Customer Oriented</>
    },
]


const ServiceArea = () => {
    return (
        <>
            <section className="tp-service-3-area p-relative pt-120 pb-60" 
                style={{backgroundImage: `url(/assets/img/services/home-3/service-bg.png)`}}>
                    <div className="container">

                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="tp-service-3-title-wrapper">
                                <span className="tp-section-title__pre">
                                service <span className="title-pre-color">IT Solutions</span>
                                <AngleArrow /> 
                                </span>
                                <h3 className="tp-section-title">
                                    Best Digital <span className="title-color">Technology</span> <br /> Agency For People
                                </h3>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="tp-service-3-title-wrapper justify-content-start justify-content-xl-end d-flex">
                                <p>Transmax is the world’s driving worldwide coordinations supplier <br />
                                we uphold industry and exchange the worldwide trade of about <br />
                                merchandise through land transport.w much you know</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        {service_data.map((item, i) => 
                            <div key={i} className="col-xl-3 col-md-6">
                                <div className="tp-service-3-content OneByOne mb-30">
                                    <div className="tp-service-3-content-thumb">
                                    <Image src={item.img} alt="theme-pure" />
                                    </div>
                                    <h4 className="tp-service-3-title">
                                        <Link href="/service-details">
                                        {item.title}
                                        </Link>
                                    </h4>
                                    <p>{item.description}</p>
                                    <div className="tp-service-btn">
                                    <Link href="/service-details">Read More <i className="fa-solid fa-arrow-up-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        )} 
                    </div>
                    <div className="row">
                        <div className="col-xl-12">
                            <div className="tp-service-3-trend text-center mt-50">
                                <p>
                                    <i className="fa-regular fa-arrow-right-long"></i> 
                                        Bring them together and you overcome the ordinary. 
                                    <Link href="/service-details"> View More SErvice</Link> 
                                    <i className="fa-regular fa-arrow-left-long"></i>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ServiceArea;