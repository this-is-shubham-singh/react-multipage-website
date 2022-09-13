import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1 className="common-heading">Contact Us</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.538097724047!2d77.42608007337743!3d28.703460748545695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf1cfe5d2d549%3A0x93b249fd20a29ec6!2sClassic%20Residency%20Society%20Raj%20Nagar%20Extension.!5e0!3m2!1sen!2sin!4v1661486442019!5m2!1sen!2sin"
        width="100%"
        height="280"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>

      <div className="form-div">
        <form
          action="https://formspree.io/f/xnqrnbdn"
          method="POST"
          className="form-container"
        >
          <input
            type="text"
            name="Username"
            placeholder="USERNAME"
            autoComplete="off"
            required
            className="inputtext"
          />

          <input
            type="email"
            name="Email"
            placeholder="EMAIL"
            autoComplete="off"
            required
            className="inputemail"
          />

          <textarea
            name="Message"
            cols="30"
            rows="6"
            autoComplete="off"
            required
            className="inputtextarea"
          ></textarea>

          <input className="inputsubmit" type="submit" value="SEND" />
        </form>
      </div>
    </div>
  );
};

export default Contact;
