import React from "react";

const ServiceContactForm = () => {
  return (
    <>
      <form id="contact-form" onClick={(e) => e.preventDefault()} method="POST">
        <div className="row tp-gx-10">
          <div className="col-md-6">
            <div className="tp-service-contact-input">
              <input name="name" type="text" placeholder="Fast Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-service-contact-input">
              <input name="text" type="text" placeholder="Last Name" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-service-contact-input">
              <input name="email" type="email" placeholder="Email" />
            </div>
          </div>
          <div className="col-md-6">
            <div className="tp-service-contact-input">
              <input name="text" type="text" placeholder="Phone" />
            </div>
          </div>
          <div className="col-md-12">
            <div className="tp-service-contact-input">
              <textarea name="message" placeholder="Enter Message"></textarea>
            </div>
          </div>
          <div className="tp-service-contact-btn mt-10">
            <button type="submit" className="tp-btn">
              Send Message
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default ServiceContactForm;
