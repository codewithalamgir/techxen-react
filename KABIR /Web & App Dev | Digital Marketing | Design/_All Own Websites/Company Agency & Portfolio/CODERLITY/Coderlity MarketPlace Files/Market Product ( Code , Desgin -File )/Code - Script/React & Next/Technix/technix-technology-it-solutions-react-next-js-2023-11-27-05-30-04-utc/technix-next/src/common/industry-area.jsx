import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import SmsIcon from '@/src/svg/sms-icon';
import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';
import VideoPopup from '@/src/modals/video-popup';

import industry_shape_1 from "@assets/img/industry/shape-1.png";
import industry_shape_2 from "@assets/img/industry/shape-2.png";
import industry_shape_3 from "@assets/img/industry/shape-3.png";

import industry_icon_1 from "@assets/img/industry/icon-1.svg";
import industry_icon_2 from "@assets/img/industry/icon-2.svg";
import industry_icon_3 from "@assets/img/industry/icon-3.svg";
import industry_thumb_1 from "@assets/img/industry/img-1.jpg";
import industry_thumb_2 from "@assets/img/industry/img-2.jpg";


const IndustryArea = ({service}) => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <> 
            <section className={`tp-industry-area p-relative ${service ? "pt-100" : "pb-90"}`}>
                    <div className="tp-industry-shape">
                        <Image className="shape-1" src={industry_shape_1} alt="theme-pure" />
                        <Image className="shape-2" src={industry_shape_2} alt="theme-pure" />
                        <Image className="shape-3" src={industry_shape_3} alt="theme-pure" />
                    </div>
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-12">
                                <div className="tp-industry-title-wrapper text-center">
                                    <span className="tp-section-title__pre">
                                    Company <span className="title-pre-color">Strategy</span> 
                                    <AngleArrow />
                                    </span>
                                    <h3 className="tp-section-title">It Industry & Our Strategy
                                    <span className="title-center-shape"> 
                                        <LineArrowTwo />
                                    </span>
                                    </h3>
                                </div>
                            </div>

                            <div className="col-xl-6 col-lg-12">
                                <div className="tp-industry-wrapper mb-30 fadeLeft">
                                    <div className="tp-industry-content">
                                    <h3 className="tp-industry-content-title">Best It & Technology Agency <br /> For Your Business</h3>
                                    <div className="tp-industry-thumb-wrapper d-flex">
                                        <div className="tp-industry-thumb text-center">
                                            <Image src={industry_icon_1} alt="theme-pure" />
                                            <h4 className="tp-industry-title">Business</h4>
                                        </div>
                                        <div className="tp-industry-thumb text-center">
                                            <Image src={industry_icon_2} alt="theme-pure" />
                                            <h4 className="tp-industry-title">It Consultancy</h4>
                                        </div>
                                        <div className="tp-industry-thumb text-center">
                                            <Image src={industry_icon_3} alt="theme-pure" />
                                            <h4 className="tp-industry-title">Cloud Server</h4>
                                        </div>
                                    </div>
                                    <div className="tp-industry-btn">
                                        <span className="icon">
                                            <SmsIcon /> 
                                        </span> 
                                        <Link href="/service-details">
                                            Consult With It Advisor? <span>Click Now</span>
                                        </Link>
                                    </div>
                                    </div>
                            </div>
                            </div>

                            <div className="col-xl-6 col-lg-12">
                                <div className="tp-industry-wrapper mb-30 fadeRight">
                                    <div className="tp-industry-tab">
                                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                        <button tabIndex="-1"  className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">integrity</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                        <button tabIndex="-1"  className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">obejectives</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                        <button  tabIndex="-1" className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">excellence</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">

                                        <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                            <div className="tp-industry-tab-content">
                                                <div className="tp-industry-tab-content-inner d-flex mb-30">
                                                <div className="tp-industry-tab-thumb p-relative">
                                                    <Image src={industry_thumb_1} alt="theme-pure" /> 
                                                     <button className="popup-video" onClick={() => setIsVideoOpen(true)} >
                                                        <i className="fa-sharp fa-solid fa-play"></i>
                                                    </button> 
                                                </div>
                                                <ul>
                                                    <li><span><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z" fill="currentColor"/>
                                                        </svg></span> Technology Growth</li>
                                                    <li><span><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z" fill="currentColor"/>
                                                        </svg></span> Customer Oriented Program</li>
                                                    <li><span><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z" fill="currentColor"/>
                                                        </svg></span> Dedicated Team member</li>
                                                    <li><span><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z" fill="currentColor"/>
                                                        </svg></span> Customer Oriented Program</li>
                                                </ul>
                                                </div>
                                                <div className="tp-industry-progress-bar fix">
                                                <div className="tp-industry__progresss">
                                                    <h4>Digital Strategy</h4>
                                                    <div className="progress">
                                                        <div className="progress-bar wow fadeInLeft" data-wow-duration="1s"
                                                        data-wow-delay=".3s" role="progressbar" aria-label="Example with label" 
                                                        style={{width: "65%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                            <span>65%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                                            <div className="tp-industry-tab-content">
                                                <div className="tp-industry-tab-content-inner d-flex mb-30">
                                                <div className="tp-industry-tab-thumb p-relative">
                                                <Image src={industry_thumb_2} alt="theme-pure" />
                                                <button className="popup-video" 
                                                onClick={() => setIsVideoOpen(true)} 
                                                ><i className="fa-sharp fa-solid fa-play"></i>
                                                </button> 
                                                </div>

                                                <ul>
                                                    <li>
                                                        <span>
                                                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z" fill="currentColor"/>
                                                        </svg>
                                                        </span> Technology Growth
                                                    </li>
                                                    <li>
                                                        <span><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z" fill="currentColor"/>
                                                        </svg></span> Customer Oriented Program</li>
                                                    <li><span>
                                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z" fill="currentColor"/>
                                                        </svg>
                                                        </span> Dedicated Team member</li>
                                                    <li><span><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z" fill="currentColor"/>
                                                        </svg></span> Customer Oriented Program</li>
                                                </ul>
                                                </div>
                                                <div className="tp-industry-progress-bar fix">
                                                <div className="tp-industry__progresss">
                                                    <h4>Digital Strategy</h4>
                                                    <div className="progress">
                                                        <div className="progress-bar wow fadeInLeft" data-wow-duration="1s"
                                                        data-wow-delay=".3s" role="progressbar" aria-label="Example with label" style={{width: "80%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                            <span>80%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                                            <div className="tp-industry-tab-content">
                                                <div className="tp-industry-tab-content-inner d-flex mb-30">
                                                <div className="tp-industry-tab-thumb p-relative">
                                                    <img src="/assets/img/industry/img-3.jpg" alt="theme-pure" />
                                                <button className="popup-video" 
                                                    onClick={() => setIsVideoOpen(true)}><i className="fa-sharp fa-solid fa-play"></i>
                                                </button>
                                                </div>
                                                <ul>
                                                    <li>
                                                        <span>
                                                            
                                                            <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z" fill="currentColor"/>
                                                            </svg>
                                                        </span> Technology Growth
                                                    </li>
                                                    <li>
                                                        <span>
                                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z" fill="currentColor"/>
                                                        </svg>
                                                        </span> Customer Oriented Program
                                                    </li>
                                                    <li>
                                                        <span>
                                                        <svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z" fill="currentColor"/>
                                                        </svg>
                                                        </span> Dedicated Team member
                                                    </li>
                                                    <li>
                                                        <span><svg width="12" height="10" viewBox="0 0 12 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M11.196 1.39334C10.284 2.22534 9.396 3.19334 8.532 4.29734C7.78 5.24934 7.104 6.22534 6.504 7.22534C5.96 8.12134 5.564 8.88934 5.316 9.52934C5.308 9.55334 5.292 9.57334 5.268 9.58934C5.244 9.61334 5.216 9.62534 5.184 9.62534C5.176 9.63334 5.168 9.63734 5.16 9.63734C5.104 9.63734 5.064 9.62134 5.04 9.58934L0.756 5.23334C0.748 5.22534 0.852 5.12134 1.068 4.92134C1.284 4.71334 1.496 4.52534 1.704 4.35734C1.936 4.16534 2.06 4.07734 2.076 4.09334L4.428 5.94134C5.116 5.13334 5.888 4.33334 6.744 3.54134C8.032 2.35734 9.36 1.34934 10.728 0.517344C10.752 0.517344 10.844 0.629344 11.004 0.853343L11.244 1.20134C11.252 1.23334 11.252 1.26934 11.244 1.30934C11.236 1.34134 11.22 1.36934 11.196 1.39334Z" fill="currentColor"/>
                                                        </svg></span> Customer Oriented Program
                                                    </li>
                                                </ul>
                                                </div>
                                                <div className="tp-industry-progress-bar fix">
                                                <div className="tp-industry__progresss">
                                                    <h4>Digital Strategy</h4>
                                                    <div className="progress">
                                                        <div className="progress-bar wow fadeInLeft" data-wow-duration=".5s"
                                                        data-wow-delay=".3s" role="progressbar" aria-label="Example with label" style={{width: "85%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                                                            <span>85%</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>

            <VideoPopup
            isVideoOpen={isVideoOpen}
            setIsVideoOpen={setIsVideoOpen}
            videoId={"EW4ZYb3mCZk"} 
            />
        </>
    );
};

export default IndustryArea;