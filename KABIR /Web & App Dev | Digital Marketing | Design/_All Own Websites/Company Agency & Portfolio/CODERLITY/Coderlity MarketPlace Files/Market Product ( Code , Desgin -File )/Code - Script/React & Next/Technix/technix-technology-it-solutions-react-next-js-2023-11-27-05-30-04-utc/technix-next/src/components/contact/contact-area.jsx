import ContactForm from '@/src/forms/contact-form'; 
import EmailIconOne from '@/src/svg/email-icon-1';
import PhoneIcon from '@/src/svg/phone-icon';
import React from 'react';

const ContactArea = () => {
    return (
        <>
            <section className="tp-contact-area pt-120 pb-90">
                <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="tp-contact-wrapper">
                            <div className="tp-contact-title-wrapper">
                            <h3 className="tp-contact-title">Contact <span className="title-color">With us</span></h3> 
                            <p>Email, call, or complete the form to learn how Kion can <br /> 
                             solve your cloud management and governance cha.</p>
                            </div>
                            <div className="tp-contact-content">
                            <div className="tp-contact-content-mail d-flex align-items-center">
                                <div className="tp-contact-content-mail-icon">
                                    <span> 
                                        <EmailIconOne /> 
                                    </span>
                                </div>
                                <h3 className="tp-contact-item-title"><a href="mailto:@themepure.gmail.com">thepureingsai.co.uk</a></h3>
                            </div>
                            <div className="tp-contact-content-phone d-flex align-items-center">
                                <div className="tp-contact-content-phone-icon">
                                    <span>
                                        <PhoneIcon /> 
                                    </span>
                                </div>
                                <h3 className="tp-contact-item-title">
                                    <a href="tel:9266688000">+880 123 456 789 , 99875</a>
                                </h3>
                            </div>
                            <div className="tp-contact-location-wrapper d-flex">
                                <div className="tp-contact-location">
                                    <h3 className="tp-contact-location-title">
                                        Office Location
                                        <i className="fa-regular fa-arrow-down"></i>
                                    </h3>
                                    <p>4517 Washington Ave. Manch ester, Kentucky 39495</p>
                                </div>
                                <div className="tp-contact-location">
                                    <h3 className="tp-contact-location-title">
                                        Office Location {" "}
                                    <i className="fa-regular fa-arrow-down"></i></h3>
                                    <p>4517 Washington Ave. Manch ester, Kentucky 39495</p>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="tp-contact-form">
                            <h3 className="tp-contact-form-title">Contact Us</h3>
                            <p>Your email address will not be published. Required fields <br  /> are marked *</p>
                            <ContactForm /> 
                            <p className="ajax-response"></p>
                        </div>
                    </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default ContactArea;