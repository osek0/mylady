import React from 'react';
import { useParams } from 'react-router-dom';
import emailjs from 'emailjs-com';

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const userID = process.env.REACT_APP_EMAILJS_USER_ID;

const ContactEmail = () => {

  const { id } = useParams();

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
    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="from_name" />
      <label>Email</label>
      <input type="email" name="reply_to" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
      <input type="hidden" value={id} name="productID" />
    </form>
  );
}

export default ContactEmail;