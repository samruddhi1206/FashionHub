import React from "react";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="container my-3">
      <div className="row shadow-lg rounded overflow-hidden">

        {/* Left Form Section */}
        <div className="col-md-6 p-5 contact-left text-white">
          <h3 className="mb-4">Send us a message</h3>

          <form>
            <div className="mb-2">
              <input type="text" className="form-control custom-input" placeholder="Name" />
            </div>

            <div className="mb-2">
              <input type="email" className="form-control custom-input" placeholder="Email" />
            </div>

            <div className="mb-2">
              <input type="text" className="form-control custom-input" placeholder="Subject" />
            </div>

            <div className="mb-2">
              <textarea
                rows="4"
                className="form-control custom-input"
                placeholder="Message"
              ></textarea>
            </div>

            <button className="btn px-4">Send Message</button>
          </form>
        </div>

        {/* Right Info Section */}
        <div className="col-md-6 p-5 bg-white">
          <h2 className="fw-bold">Contact Us</h2>
          <p className="mb-4" style={{color:"#e6b980"}}>
            We're open for any suggestion or just to have a chat
          </p>

          <p><strong>📍 Address:</strong> Pune, Maharashtra</p>
          <p><strong>📞 Phone:</strong> +91 12356789</p>
          <p><strong>✉ Email:</strong> FashionHub@yoursite.com</p>
          <p><strong>🌐 Website:</strong> FashionHub.com</p>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;