import React from "react";
import Count from "@/src/common/count";

const counter_data = [
  {
    id: 1,
    count: 560,
    text: "Total Services",
    symbol: "",
    border: "tp-counter-border",
  },
  {
    id: 2,
    count: 98,
    text: "Client Satisfiction",
    symbol: "%",
    border: "tp-counter-border",
  },
  {
    id: 3,
    count: 3,
    text: "Monthly Review",
    symbol: "m+",
    border: "tp-counter-border",
  },
  {
    id: 4,
    count: 30,
    text: "Years Experince",
    symbol: "+",
    border: "",
  },
];

const CounterArea = ({about}) => {
  return (
    <> 
      <section className={`tp-counter-area ${about ? "p-relative counter-breadcrumb pb-100" : "pb-85"}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="tp-counter-box"
                style={{backgroundImage: `url(/assets/img/fun-fact/counter-bg.png)`}}>
                <div className="row">
                  {counter_data.map((item, i) => (
                    <div key={i} className="col-lg-3 col-md-6 col-sm-6">
                      <div className={`tp-counter-wrapper ${item?.border} text-center`}>
                        <h3 className="counter-title"> 
                          <span
                            data-purecounter-duration="4"
                            data-purecounter-end="560"
                            className="purecounter"
                          >
                            <Count
                              add_style={true}
                              number={item.count}
                              text={item.symbol}
                            />
                          </span>
                        </h3>
                        <span className="counter-subtitle">{item.text}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CounterArea;
 