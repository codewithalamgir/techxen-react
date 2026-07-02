import React from 'react';

const GoogleMap = () => {
    return (
        <>
            <div className="tp-contact-map-area">
            <div className="tp-contact-map">
               <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56557.40337080792!2d-122.06589254433018!3d37.87941669573798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80856152cc733413%3A0x4250b3bb90c93019!2sPleasant%20Hill%2C%20CA%2C%20USA!5e0!3m2!1sen!2sbd!4v1675489390593!5m2!1sen!2sbd" style={{border: "0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" width="600" height="450"></iframe>
            </div>
         </div>
        </>
    );
};

export default GoogleMap;