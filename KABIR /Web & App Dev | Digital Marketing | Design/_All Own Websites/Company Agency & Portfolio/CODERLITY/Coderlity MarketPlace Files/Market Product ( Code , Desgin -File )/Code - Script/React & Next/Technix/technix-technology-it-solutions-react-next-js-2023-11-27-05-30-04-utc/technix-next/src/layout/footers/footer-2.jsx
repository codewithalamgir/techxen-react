import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import EmailAeroplan from '@/src/svg/email-aeroplan';
import SocialLinks from '@/src/common/social-links';

import  footer_shape_1 from "@assets/img/footer/shape-1.png";
import  footer_logo from "@assets/img/logo/footer-logo.png";


const footer_two_content = {
    bg_img: "/assets/img/footer/footer-2-bg.png",
    footer_widget: [
        "Parking permission",
        "Fire Service Noc",
        "Report a Parking Violation",
        "Residential Parking",
        "Vendor Registration",
    ],
    google_map: "https://www.google.com/maps/place/254+Lillian+Blvd,+Holbrook,+NY+11741,+USA/@40.7937446,-73.0774993,17z/data=!3m1!4b1!4m5!3m4!1s0x89e8483b469d706f:0xa6841f8aafc2ef19!8m2!3d40.7937446!4d-73.0753106",
    about_us: <>The world’s first and largest digital marketplace <br /> for crypto collectibles and non-fungible tokens (NFTs). Buy</>,
    address: " 254 Lillian Blvd, Holbrook",
    phone: "1-800-654-3210",
    email: "needhelp@company.com",
    footer_nav: [
        {title: "Home", link: "/"},
        {title: "Company", link: "/"},
        {title: "services", link: "/service"},
        {title: "Resources", link: "#"},
        {title: "Shop", link: "#"},
        {title: "contact", link: "/contact"},
    ],
    mobile: "+88 1900 6789 56",


}
const {bg_img, footer_widget, google_map, about_us, address, phone, email, footer_nav, mobile} = footer_two_content

const FooterTwo = () => {
    return (
        <>
            <footer className="tp-footer-2-area p-relative">
                <div className="tp-footer-overlay" style={{backgroundImage: `url(${bg_img})`}}>
                    <div className="tp-footer-2-shape">
                        <Image src={footer_shape_1} alt="theme-pure" />
                    </div>
                    <div className="container">
                    <div className="tp-footer-2-main-area">
                    <div className="row">
                        <div className="col-xl-4 col-lg-5 col-md-6">
                            <div className="tp-footer-widget tp-footer-2-col-1">
                                <h3 className="tp-footer-widget-title">Newsletter</h3>
                                <div className="tp-footer-from">
                                <div className="tp-footer-text-email p-relative">
                                    <input type="text" placeholder="Enter Email Address" />
                                    <span>
                                        <EmailAeroplan /> 
                                    </span>
                                </div>
                                <div className="tp-footer-form-check">
                                <input className="form-check-input" id="flexCheckChecked" type="checkbox" />
                                <label className="form-check-label" htmlFor="flexCheckChecked">
                                    I agree to all your terms and policies
                                </label>
                                </div>
                                <div className="tp-footer-widget-social">
                                    <SocialLinks /> 
                                </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-3 col-md-6">
                            <div className="tp-footer-widget tp-footer-2-col-2">
                                <h3 className="tp-footer-widget-title">Services Req</h3>
                                <div className="tp-footer-widget-content">
                                    <ul>{footer_widget.map((item, i) => <li key={i}><Link href="#">{item}</Link></li>)}</ul>
                                </div>
                            </div> 
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6">
                            <div className="tp-footer-widget tp-footer-2-col-3">
                                <h3 className="tp-footer-widget-title">About Us</h3>
                                <div className="tp-footer-widget-content">
                                <div className="tp-footer-info">
                                    <p>{about_us}</p>
                                    <div className="tp-footer-main-location">
                                        <Link target="_blank" href={google_map}>
                                            <i className="fa-sharp fa-light fa-location-dot"></i>{address}</Link>
                                    </div>
                                    <div className="tp-footer-main-mail">
                                        <Link href={`mailto:${email}`}><i className="fa-regular fa-phone"></i>{phone}</Link>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="tp-footer-2-menu-area p-relative">
                        <div className="row align-items-center">
                            <div className="col-lg-2 col-md-2">
                                <div className="tp-footer-2-logo">
                                    <Image src={footer_logo} alt="theme-pure" />
                                </div>
                            </div>
                            <div className="col-lg-8 col-md-10">
                                <div className="tp-footer-2-menu">
                                    <ul>{footer_nav.map((item, i) => <li key={i}><Link href={item.link}>{item.title}</Link></li>)}</ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <div className="tp-footer-2-call d-flex justify-content-lg-end">
                                <div className="ddf">
                                    <p>Phone:</p>
                                    <span><Link href={`tel:${mobile}`}>{mobile}</Link></span>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterTwo;