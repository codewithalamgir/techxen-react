import useSticky from '@/src/hooks/use-sticky';
import Link from 'next/link';
import React, {useEffect, useRef, useState} from 'react';
import NavMenu from './nav-menu';
import Logo from "@assets/img/logo/footer-logo.png";
import Image from 'next/image';
import SearchPopup from '@/src/modals/search-popup';
import Sidebar from '@/src/modals/sidebar';
import call_icon from '@assets/img/icon/call.svg';
import { SocialLinksTwo } from '@/src/common/social-links';

const HeaderThree = () => {
   const {sticky}  =  useSticky()
   const [searchOpen, setSearchOpen] = useState(false)
   const [sidebarOpen, setSidebarOpen] = useState(false)
   const [isLangListOpen, setIsLangListOpen] = useState(false);
   const [isLangListOpen2, setIsLangListOpen2] = useState(false);
   const langToggleRef = useRef(null);
   const langToggleRef2 = useRef(null);

   useEffect(() => {
     if (langToggleRef.current) {
       const handleClickOutside = (e) => {
         if (langToggleRef.current.contains(e.target)) {
           setIsLangListOpen(!isLangListOpen);
         } else {
           setIsLangListOpen(false);
         }
       };
       window.addEventListener('click', handleClickOutside);
       return () => {
         window.removeEventListener('click', handleClickOutside);
       };
     }
   }, [isLangListOpen, langToggleRef]);

   useEffect(() => {
    if (langToggleRef2.current) {
      const handleClickOutside2 = (e) => {
        if (langToggleRef2.current.contains(e.target)) {
          setIsLangListOpen2(!isLangListOpen2);
        } else {
          setIsLangListOpen2(false);
        }
      };
      window.addEventListener('click', handleClickOutside2);
      return () => {
        window.removeEventListener('click', handleClickOutside2);
      };
    }
  }, [isLangListOpen2, langToggleRef2]);



    return (
        <>
            <header className="tp-header-3-area tp-header-3-transparent tp-header-height p-relative">
                <div className="tp-header-3-top tp-header-3-space d-none d-xl-block">
                    <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-10 col-xxl-8">
                            <div className="tp-header-3-top-info d-flex">
                                <div className="tp-header-3-top-call d-flex">
                                <span>Call</span>
                                <p>Consult With It Advisor? <a href="#">Click Now</a></p>
                                </div>
                                <ul>
                                <li>
                                    <Link href="https://www.google.com/maps/@36.0758266,-79.4558848,17z" target="_blank">
                                        <span><i className="fa-sharp fa-solid fa-location-dot"></i></span>
                                        734 H, Bryan Burlington, NC 27215
                                    </Link>
                                </li>
                                <li>
                                    <a href="mailto:technix@support.com"><span><i className="fa-solid fa-envelope"></i></span>technix@support.com</a>
                                </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-xxl-4">
                            <div className="tp-header-3-top-right d-flex justify-content-end align-items-center">
                                <div className="header-social d-xxl-block d-none">
                                    <SocialLinksTwo /> 
                                </div>
                                <div className="tp-header-usd">
                                <span className="tp-header-usd-selected-usd tp-usd-toggle" 
                                id="tp-header-usd-toggle" 
                                ref={langToggleRef2}
                                >USD</span>
                                <ul className={`tp-header-usd-list tp-usd-list ${isLangListOpen2 ? 'tp-usd-list-open' : ''}`}>
                                    <li>EUR</li>
                                    <li>AFN</li>
                                    <li>XCD</li>
                                </ul>
                                </div>
                                <div className="tp-header-3-lang-wrapper d-flex align-items-center">
                                <div className="tp-header-lang-img">
                                    <img src="/assets/img/logo/logo-lang.png" alt="theme-pure" />
                                </div>
                                <div className="tp-header-lang">
                                    <span className="tp-header-lang-selected-lang tp-lang-toggle" 
                                    ref={langToggleRef}
                                    id="tp-header-lang-toggle">English</span>
                                    <ul className={`tp-header-lang-list tp-lang-list ${isLangListOpen ? 'tp-lang-list-open' : ''}`}>
                                        <li>Spanish</li>
                                        <li>English</li>
                                        <li>Canada</li>
                                    </ul>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div> 
                <div id="header-sticky" className={`tp-header-3-bottom header__sticky p-relative ${sticky && "tp-header-sticky"}`}>
                    <div className="tp-header-3-bottom-inner p-relative">
                    <div className="container-fluid gx-0">
                        <div className="row gx-0 align-items-center">
                            <div className="col-xl-2 col-6">
                            <div className="tp-header-2-main-left d-flex align-items-center justify-content-xl-center p-relative">
                                <div className="tp-header-3-logo">
                                <Link href="/">
                                    <Image src={Logo} alt="theme-pure" />
                                </Link>
                                </div>
                            </div>
                            </div>
                            <div className="col-xl-8 d-none d-xl-block">
                                <div className="tp-main-menu-3-area d-flex align-items-center justify-content-center">
                                <div className="tp-main-menu menu-icon">
                                    <nav id="tp-mobile-menu">
                                        <NavMenu />                                        
                                    </nav>
                                </div>
                                <div className="tp-header-search search-open-btn d-none d-xl-block" onClick={() => setSearchOpen(true)}>
                                    <button> 
                                        
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M8.80758 0C3.95121 0 0 3.95121 0 8.80758C0 13.6642 3.95121 17.6152 8.80758 17.6152C13.6642 17.6152 17.6152 13.6642 17.6152 8.80758C17.6152 3.95121 13.6642 0 8.80758 0ZM8.80758 15.9892C4.84769 15.9892 1.62602 12.7675 1.62602 8.80762C1.62602 4.84773 4.84769 1.62602 8.80758 1.62602C12.7675 1.62602 15.9891 4.84769 15.9891 8.80758C15.9891 12.7675 12.7675 15.9892 8.80758 15.9892Z" fill="black"/>
                                        <path d="M19.76 18.6124L15.0988 13.9511C14.7811 13.6335 14.2668 13.6335 13.9492 13.9511C13.6315 14.2684 13.6315 14.7834 13.9492 15.1007L18.6104 19.762C18.7692 19.9208 18.9771 20.0002 19.1852 20.0002C19.3931 20.0002 19.6012 19.9208 19.76 19.762C20.0776 19.4446 20.0776 18.9297 19.76 18.6124Z" fill="black"/>
                                    </svg>
                                    </button>
                                </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-6">
                                <div className="tp-header-3-right">
                                <div className="tp-header-3-main-right d-flex align-items-center justify-content-end">
                                    <div className="tp-header-3-phone d-flex align-items-center">
                                        <div className="tp-header-3-phone-icon">
                                            <Image src={call_icon} alt="theme-pure" />
                                        </div>
                                        <div className="tp-header-3-phone-content">
                                            <span>Phone: <br /> <a href="tel:01900678956">+88 1900 6789 56</a></span>
                                        </div>
                                    </div>
                                    <div className="tp-header-3-hamburger-btn offcanvas-open-btn" onClick={() => setSidebarOpen(true)}>
                                        <button className="hamburger-btn">
                                            <span>
                                            <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 1.13163C0 0.506972 0.499692 0 1.11538 0H20.4487C21.0644 0 21.5641 0.506972 21.5641 1.13163C21.5641 1.7563 21.0644 2.26327 20.4487 2.26327H1.11538C0.499692 2.26327 0 1.7563 0 1.13163ZM27.8846 10.5619H1.11538C0.499692 10.5619 0 11.0689 0 11.6935C0 12.3182 0.499692 12.8252 1.11538 12.8252H27.8846C28.5003 12.8252 29 12.3182 29 11.6935C29 11.0689 28.5003 10.5619 27.8846 10.5619ZM14.5 21.1238H1.11538C0.499692 21.1238 0 21.6308 0 22.2555C0 22.8801 0.499692 23.3871 1.11538 23.3871H14.5C15.1157 23.3871 15.6154 22.8801 15.6154 22.2555C15.6154 21.6308 15.1157 21.1238 14.5 21.1238Z" fill="currentColor"/>
                                            </svg>
                                            </span>
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </header>
            <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
            <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} home_three={true} /> 

             
        </>
    );
};

export default HeaderThree;