import React from 'react';
import emailjs from 'emailjs-com';

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_EMAILJS_USER_ID;

const Contact = () => {

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, e.target, userID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contact">
      Contact
      <div className="contact-info">
        
      </div>
      <div className="contatct-form">
        <form className="contact-form" onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="from_name" />
          <label>Email</label>
          <input type="email" name="reply_to" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
      {/* <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d459.0063674314589!2d19.143158895324643!3d50.78273036340054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x406a34264d0305fc!2sJagiello%C5%84czycy!5e0!3m2!1spl!2spl!4v1601985736607!5m2!1spl!2spl" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      </div> */}
    </div>
  );
}

export default Contact;