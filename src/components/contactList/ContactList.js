import React from "react";
import ContactListItem from "../contactListItem/ContactListItem";
import trasition from '../../animation/transition.module.css';
import {CSSTransition, TransitionGroup } from 'react-transition-group';

const ContactList = ({ contacts, deleteContact }) => (
  <TransitionGroup component="ul">
    {contacts.map(contact => (
        <CSSTransition key={contact.id} timeout={1500} classNames={trasition} unmountOnExit>
                <ContactListItem contact={contact}  deleteContact={deleteContact} />
        </CSSTransition>
    ))}
  </TransitionGroup>
);

export default ContactList;