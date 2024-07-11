import React from 'react';
import quoteImg from '../images/quote-left-light.svg';

export default function Testimonial({ testimonialDetail }) {

    // Getting testimonial and its author.
    const testimonialGivenByName = testimonialDetail['name'];
    const testimonialText = testimonialDetail['testimonialText'];

    return (
        <div className="testimonial">
            <img src={quoteImg} alt="Testimonial" className="testimonialImage" width="30px" />
            <p>{testimonialText}</p>
            <p className="name">{testimonialGivenByName}</p>
        </div>
    );
};
