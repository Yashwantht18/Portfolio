import '../style/Contact.css'

function Contact() {
    return (
        <div className="contact-section bg-dark text-light py-5" id="contact">
            <div className="container">
                <div className="row">
                    {/* Contact Heading */}
                    <div className="col-12 col-md-6 mb-4 contact-title ms-md-3">
                        <h1 className="display-4 title">Contact</h1>
                        <hr className="border-light" />
                    </div>
                </div>
                <div className="container-xxl row row-cols-2 text-center ">
                    <div className="col-6 hello-title">
                        <h2 className="fw-light hello-text">Say <span className="fw-bold "><br />HELLO!</span></h2>
                    </div>

                    <div className="col-6 d-flex flex-column align-items-lg-start  contact-way">
                        <a href="mailto:yashwanththangaraj18@gmail.com" className="text-light fs-4 text-decoration-none mb-2 ways">Email</a>
                        <a href="https://github.com/Yashwantht18/" target="_blank" rel="noopener noreferrer" className="text-light fs-4 text-decoration-none mb-2 ways">GitHub</a>
                        <a href="https://www.linkedin.com/in/yashwanth-thangaraj-935b1a287/" target="_blank" rel="noopener noreferrer" className="text-light fs-4 text-decoration-none ways">LinkedIn</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
