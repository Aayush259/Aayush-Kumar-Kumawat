import React from 'react';
import Testimonial from './Testimonial.jsx';

export default function AboutSection() {

    // This function creates testimonial.
    const createTestimonial = (name, testimonialText) => ({
        name,
        testimonialText,
    });

    // Array of all testimonials object to display in about section.
    const testimonials = [
        createTestimonial('Steve Jobs', 'I think everybody in this country should learn how to program a computer because it teaches you how to think.'),

        createTestimonial('Bill Gates', 'Learning to write programs stretches your mind and helps you think better, creates a way thinking about things that I think is helpful in all domains.'),
    ];

    return (
        <section id="about" className="section aboutSection">
            <p>About</p>
            <div className="about">
                <p style={{marginBottom: '1rem'}}>I'm a tech enthusiast 💻 and a passionate coder with strong foundation in JavaScript and React. I have a knack for creating dynamic and responsive web applications that provide excellent user experiences. My projects on <a className="githubLink" style={{paddingTop: '0', paddingBottom: '0'}} href="https://github.com/Aayush259" target="_blank">GitHub</a> tell more about my skills and learning journey, so don't forget to check it out!</p>
                <p>I am currently pursuing my bachelor's degree at University Maharaja College 👑, Jaipur, where I am in my first year. This combination of formal education and independent learning has equipped me with a solid foundation in web development, and I am continuously striving to enhance my skills and build dynamic, responsive web applications.</p>
            </div>
            <div className="testimonialContainer flex">
                {
                    testimonials.map(testimonial => <Testimonial key={testimonial['name']} testimonialDetail={testimonial} />)
                }
            </div>
        </section>
    );
};
