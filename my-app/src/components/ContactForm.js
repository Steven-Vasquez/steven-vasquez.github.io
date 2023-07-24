import React, { useState } from 'react';
import "../stylesheets/ContactForm.css"

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here, you can perform form validation and make the actual form submission.
        // For simplicity, we will just print the form data for now.
        console.log(formData);
        // You can make an HTTP POST request here to submit the form data to a backend server.
        // For example, using the fetch API or Axios.
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
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <h1 className="form-group" id="title">Get in touch (not functional)</h1>
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
                </div>
            </div>
        </>
    );
}

export default ContactForm;