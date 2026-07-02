import Count from '@/src/common/count';
import React from 'react';

const counter_content = [
    {id: 1, count: 560, title: "Total Services", symbol: "",},
    {id: 2, count: 100, title: "Client Satisfiction", symbol: "%",},
    {id: 3, count: 3, title: "Monthly Revinew", symbol: "m+",},
    {id: 4, count: 30, title: "Years Experince", symbol: "+",},
]


const CounterArea = () => {
    return (
        <>
            <section className="tp-counter-3-area p-relative ">
                <div className="tp-counter-3-bg">
                <img className="shape-1" src="/assets/img/others/bg.png" alt="theme-pure" />
                </div>
                <div className="container">
                <div className="row">
                    {counter_content.map((item, i)  => 
                        <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                            <div className="tp-counter-3-wrapper tp-counter-3-border text-center">
                                <h3 className="counter-title"> <span data-purecounter-duration="4" className="purecounter">
                                    <Count add_style={true} number={item.count} text={item.symbol} /></span> 
                                </h3>
                                <span className="counter-subtitle">{item.title}</span>
                            </div>
                        </div>
                    )} 
                </div>
                </div>
            </section>
        </>
    );
};

export default CounterArea;