import css from './ContactList.module.css'

// import React from 'react';
import Contact from './Contact.jsx';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div className={css.contactBox}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} deleteContact={deleteContact} />
      ))}
    </div>
  );
};

export default ContactList;