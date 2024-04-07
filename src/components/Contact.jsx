import css from './Contact.module.css';




// Contact.js
// import React from 'react';
import { FaUser } from "react-icons/fa6";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ contact, deleteContact }) => {
    return (
    <div className={css.contactGroup}>
        <ul className={css.list}>
        <li className={css.contactData}>
      <FaUser /> {contact.name}
        </li>
        <li className={css.contactData}>
      <BsFillTelephoneFill /> {contact.number}
        </li>
        </ul>
        <button className={css.buttonDelete} type="button" onClick={() => deleteContact(contact.id)}>Delete</button>
    </div>
  );
};


export default Contact;