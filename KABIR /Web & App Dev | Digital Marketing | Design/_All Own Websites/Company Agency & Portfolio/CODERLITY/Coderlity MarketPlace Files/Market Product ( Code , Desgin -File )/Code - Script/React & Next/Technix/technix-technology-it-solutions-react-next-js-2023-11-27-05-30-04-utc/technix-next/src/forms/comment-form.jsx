import React, { useState } from 'react';

const CommentForm = () => {
  const [isActive, setIsActive] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  const handleCheckboxChange = (e) => {
    setIsActive(e.target.checked);
  };

  return (
    <>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="postbox__comment-input">
              <input name="name" type="text" placeholder="Enter your name*" required />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="postbox__comment-input">
              <input name="email" type="email" placeholder="Enter your mail*" required />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="postbox__comment-input">
              <input name="phone" type="text" placeholder="Enter your  number*" required />
            </div>
          </div>
          <div className="col-xxl-6 col-xl-6 col-lg-6">
            <div className="postbox__comment-input">
              <input name="company" type="text" placeholder="Website*" required />
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-input">
              <textarea name="message" placeholder="Enter your Massage*"></textarea>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-agree d-flex align-items-start mb-70">
              <input
                className="e-check-input"
                type="checkbox"
                id="agree"
                checked={isActive}
                onChange={handleCheckboxChange}
              />

              <label
                className="e-check-label"
                htmlFor="agree"
                checked={isActive}
                onClick={handleCheckboxChange}
              >
                Save my name, email, and website in this browser for the next time I comment.
              </label>
            </div>
          </div>
          <div className="col-xxl-12">
            <div className="postbox__comment-btn">
              <button type="submit" className="tp-btn">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default CommentForm;
