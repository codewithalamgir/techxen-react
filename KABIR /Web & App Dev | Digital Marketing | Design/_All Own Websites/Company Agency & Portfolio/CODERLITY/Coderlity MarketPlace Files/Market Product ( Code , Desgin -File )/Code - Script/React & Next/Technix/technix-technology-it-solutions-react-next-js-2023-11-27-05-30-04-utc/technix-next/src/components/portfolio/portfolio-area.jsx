import portfolio_data from '@/src/data/portfolio-data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const PortfolioArea = () => {
    return (
        <>
            <section className="tp-portfolio-area pt-120 pb-60">
            <div className="container">
               <div className="row">
                {portfolio_data.map((item, i) => 
                    <div key={i} className="col-xl-4 col-lg-6 col-md-6">
                        <div className="tp-portfolio-item-wrapper">
                        <div className="tp-portfolio-item-thumb">
                            <Image src={item.img} alt="theme-pure" />
                        </div>
                        <div className="tp-portfolio-item-content">
                            <span className="tp-portfolio-item-subtitle">{item.catagory}</span>
                            <h3 className="tp-portfolio-item-title">
                                <Link href="/portfolio-details">{item.title}</Link></h3>
                            <div className="tp-portfolio-item-content-btn">
                                <Link href="/portfolio-details">View Projects 
                                    <i className="fa-regular fa-arrow-right"></i>
                                </Link>
                            </div>
                        </div>
                        </div>
                    </div>
                )} 
               </div>
            </div>
         </section>
        </>
    );
};

export default PortfolioArea;