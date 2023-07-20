import "../stylesheets/ContactForm.css"

export function ContactForm() {
    return (
        <>
            <div className="contact-section">
                <div className="contact-header">
                    <h1 style={{ display: 'flex', flexDirection: 'row', fontWeight: 400 }}>
                        <div className="highlight">
                            <div>Contact</div>
                            <div></div>
                        </div>
                    </h1>
                </div>

                <div>
                    <form className="contact-form">
                        <h1 className="form-group" id="title">Get in touch (not functional)</h1>
                        <div className="form-group" id="contact-name">
                            <label for="name"></label>
                            <input type="text" id="name" name="name" required placeholder="Your Name*" />
                        </div>

                        <div className="form-group" id="contact-email">
                            <label for="email"></label>
                            <input type="text" id="email" name="email" required placeholder="Your Email*" />
                        </div>

                        <div className="form-group" id="contact-subject">
                            <label for="subject"></label>
                            <input id="subject" name="subject" required placeholder="Subject*"></input>
                        </div>

                        <div className="form-group" id="contact-message">
                            <label for="message"></label>
                            <textarea id="message" name="message" required placeholder="Your message*"></textarea>
                        </div>


                        <input type="submit" value="Submit" id="send-button" />
                    </form>
                </div>
            </div>
        </>
    );
}

export default ContactForm;