import React from 'react';
import Image from 'next/image';

import team_shape_1 from "@assets/img/team/details/shape-1.png";
import team_shape_2 from "@assets/img/team/details/shape-2.png";
import team_member from "@assets/img/team/details/img-1.jpg";
import { SocialLinksTwo } from '@/src/common/social-links';
import RightSymbol from '@/src/svg/right-symbol';

const team_details_contact = {
    name: "Cameron Williamson",
    job_title: "Senior Reporter / Themepure",
    member_info: <>Bangladesh / Age : 32 years</>,
    description: <>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
    in some form, by injected humour, or randomised wo look even slightly believable. If you are going to use
    a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle
    Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first 
    combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reas
    characteristic words etc.</>,
    list_title: <>World best education site - (Computer engeenering)</>,
    lists: [
        <>Research beyond the business plan</>,
        <>Marketing options and rates</>,
        <>The ability to turnaround consulting</>,
        <>The ability to turnaround consulting</>,
    ]



}
const {name, job_title, member_info, description, list_title, lists}  = team_details_contact

const TeamDetailsArea = () => {
    return (
        <>
           <section className="tp-team-details-area p-relative pt-120 pb-90">
            <div className="tp-team-details-shape">
               <Image className="shape-1" src={team_shape_1} alt="theme-pure" />
               <Image className="shape-2" src={team_shape_2} alt="theme-pure" />
            </div>
            <div className="container">
               <div className="row">
                  <div className="col-lg-4">
                     <div className="tp-team-details-thumb p-relative text-center fadeLeft">
                        <Image src={team_member} alt="theme-pure" />
                           <div className="social text-center">
                            <SocialLinksTwo /> 
                           </div>
                     </div>
                  </div>
                  <div className="col-lg-8">
                     <div className="tp-team-details-wrapper fadeRight">
                        <div className="row">
                           <div className="col-lg-6">
                              <div className="tp-team-detials-designation-wrapper">
                                 <div className="tp-team-details-designation-content">
                                    <h4 className="tp-team-details-designation-title">{name}</h4>
                                    <p className="tp-team-details-designation">{job_title}</p>
                                    <div className="tp-team-details-meta d-flex">
                                       <div className="tp-team-details-meta-thumb">
                                          <img src="/assets/img/team/details/flag.png" alt="theme-pure" />
                                       </div>
                                       <p>{member_info}</p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="col-lg-6">
                              <div className="tp-team-details-rating d-flex">
                                 <span><i className="fa-solid fa-star-sharp"></i></span>
                                 <span><i className="fa-solid fa-star-sharp"></i></span>
                                 <span><i className="fa-solid fa-star-sharp"></i></span>
                                 <span><i className="fa-solid fa-star-sharp"></i></span>
                                 <span className="deactive"><i className="fa-solid fa-star-sharp"></i></span>
                                 <p>(22)</p>
                              </div>
                           </div>
                        </div>
                        <div className="tp-team-details-info">
                           <p>{description}</p>
                        </div>
                        <div className="tp-team-details-list">
                           <p className="list-title">{list_title}</p>
                           <ul>
                            {lists.map((list, index) => 
                                <li key={index}> <span> <RightSymbol /> </span>{list}</li>
                            )} 
                           </ul>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section> 
        </>
    );
};

export default TeamDetailsArea; 