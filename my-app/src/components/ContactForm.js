import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import "../stylesheets/ContactForm.css"

export function ContactForm() {
    /*********************************/
    // Emailjs code from https://www.emailjs.com/docs/examples/reactjs/
    /*********************************/
    const form = useRef();

    // This function handles the form submission.
    const handleSubmit = (e) => {
        e.preventDefault();


        emailjs.sendForm(
            process.env.REACT_APP_EMAILJS_SERVICE_ID, // Service ID
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID, // Template ID
            form.current,
            process.env.REACT_APP_EMAILJS_PUBLIC_KEY // Public key
        )
            .then((result) => {
                // Show a success toast notification after successful submission
                toast.success('Message sent successfully!', {
                    position: 'top-right',
                    autoClose: 5000, // Time in milliseconds after which the toast will be automatically closed
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                });
                console.log(result.text);
            }, (error) => {
                toast.error('Sorry, an error occurred. Try sending an email to me directly at stevenvasquez.pro@gmail.com');
                console.log(error.text);
            });

        // Clear the form data and set isSubmitted to true
        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });
        setIsSubmitted(true);
    };
    /*********************************/

    // This is the state of the form data.
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false);


    // This function handles updating the state properties for each input field.
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };



    return (
        <>
            <div className="contact-section" id="Contact">
                <div className="contact-header">
                    <h1 style={{ display: 'flex', flexDirection: 'row', fontWeight: 400 }}>
                        <div className="highlight">
                            <div>Contact</div>
                            <div></div>
                        </div>
                    </h1>
                </div>

                <div>
                    {isSubmitted ? (
                        <div className='contact-form-sent'>
                            <h1>Message sent! ✅</h1>
                            <p>Thank you for your message! I will get back to you as soon as possible.</p>
                        </div>
                    ) : (
                        <form ref={form} className="contact-form" onSubmit={handleSubmit}>
                            <h1 className="form-group" id="title">Get in touch</h1>
                            <div className="form-group" id="contact-name">
                                <label htmlFor="name"></label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your Name*"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group" id="contact-email">
                                <label htmlFor="email"></label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="Your Email*"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group" id="contact-subject">
                                <label htmlFor="subject"></label>
                                <input
                                    id="subject"
                                    name="subject"
                                    required
                                    placeholder="Subject*"
                                    value={formData.subject}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="form-group" id="contact-message">
                                <label htmlFor="message"></label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    placeholder="Your message*"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>


                            <input type="submit" value="Submit" id="send-button" />
                        </form>
                    )}

                </div>
            </div>
        </>
    );
}

export default ContactForm;