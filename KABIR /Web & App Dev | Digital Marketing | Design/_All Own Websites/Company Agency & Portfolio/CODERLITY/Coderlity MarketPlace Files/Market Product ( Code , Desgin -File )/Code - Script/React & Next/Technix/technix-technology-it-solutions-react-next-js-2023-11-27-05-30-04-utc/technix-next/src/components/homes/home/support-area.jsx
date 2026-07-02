import Count from '@/src/common/count';
import React from 'react';


// support data  
const support_content = [
    {
        id: 1, 
        count: 8, 
        symbol: "hr",
        cls: "fadeLeft",
        title: "Quick Result",
        info: <>Average time to resolve <br /> cyber attack.</>
    },
    {
        id: 2, 
        count: 3, 
        symbol: "hr",
        cls: "",
        title: "Quick Reply",
        info: <>Average time to resolve <br /> cyber attack.</>
    },
    {
        id: 3, 
        count: 94, 
        symbol: "%",
        cls: "fadeRight",
        title: "Quick Response",
        info: <>Calling answered within <br /> 15 seconds.</>
    },
]

const SupportArea = () => {
    return (
        <>
            <section className="tp-support-feature-area pb-100">
            <div className="container container-large">
               <div className="row">
                {support_content.map((item, i) =>
                    <div key={i} className="col-lg-4">
                        <div className="tp-support-feature-item d-flex p-relative fadeRight">
                        <div className="tp-support-feature-counter">
                            <div className="tp-support-feature-thumb">
                                <img src="/assets/img/brand/shape-2.png" alt="theme-pure" />
                            </div>
                            <h3 className="support-feature-title"><span data-purecounter-duration="4" className="purecounter">
                                <Count number={item.count}  text={item.symbol}  />
                            </span></h3>
                        </div>
                        <div className="tp-support-feature-content">
                            <h4 className="tp-support-feature-content-title">{item.title}</h4>
                            <p>{item.info}</p>
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

export default SupportArea;