import React, { useState } from 'react';
import Image from 'next/image';
import answer_question_data from '@/src/data/answer-question-data';


import shape_1 from  "@assets/img/support/shape-img.png";
import shape_2 from  "@assets/img/support/shape-bg.png";
import AngleArrow from '@/src/svg/angle-arrow';
import LineArrowTwo from '@/src/svg/line-arrow-2';

const FaqArea = () => {
    const [activeIndex, setActiveIndex] = useState(null);
    function handleClick(index) {
      setActiveIndex(index === activeIndex ? null : index);
    }

    return (
        <>
            <section className="tp-support-area tp-support-bg p-relative pb-110">
            <div className="container container-large">
               <div className="tp-support-shape">
                  <Image className="shape-1" src={shape_1} alt="theme-pure" />
                  <Image className="shape-2" src={shape_2} alt="theme-pure" />
               </div>
               <div className="row justify-content-center">
                  <div className="col-xxl-8 col-xl-10">
                     <div className="tp-support-title-wrapper text-center">
                        <span className="tp-section-title__pre">
                           best IT <span className="title-pre-color">Support</span>
                           <AngleArrow /> 
                        </span>
                        <h3 className="tp-section-title">Frequently Ask <span className="title-color">Question?</span>
                           <span className="title-center-shape">
                            <LineArrowTwo /> 
                           </span>
                        </h3>
                     </div>

                     <div className="tp-support-faq faq-style-1">
                        <div className="tp-faq-tab-content tp-accordion">
                           <div className="accordion" id="general_accordion">
                            {answer_question_data.map((item, i) => 
                                <div key={i} className={`accordion-item`}>
                                    <h2 className="accordion-header" id={`heading${item.accordion_id}`}>
                                    <button 
                                    className={`accordion-button ${item.collapsed}`} 
                                    type="button" 
                                    data-bs-toggle="collapse" 
                                    data-bs-target={`#collapse${item.accordion_id}`} 
                                    aria-controls={`collapse${item.accordion_id}`}
                                    >
                                        {item.question}
                                    </button>
                                    </h2>
                                    <div 
                                    id={`collapse${item.accordion_id}`} 
                                    className={`accordion-collapse collapse ${item.show ? "show" : ""}`} 
                                    aria-labelledby={`heading${item.accordion_id}`} 
                                    data-bs-parent="#general_accordion"
                                    >
                                    <div className="accordion-body">
                                        <p>{item.answer}</p>
                                    </div>
                                    </div>
                                </div> 
                            )} 
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

export default FaqArea;