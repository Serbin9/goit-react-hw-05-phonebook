import React, { Component } from "react";
import ContactForm from "../components/contactForm/ContactForm";
import ContactList from "../components/contactList/ContactList";
import Filter from "../components/filter/Filter";
import s from './app.module.css'
import {CSSTransition} from 'react-transition-group'
import phone from '../animation/phone.module.css'

class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" }
    ],
    filter: "",
    flag: false
  };

  componentDidMount(){
    const contacts = (JSON.parse(localStorage.getItem('contacts') !== null)) ? (JSON.parse(localStorage.getItem('contacts'))):[];
    console.log('object', contacts)
    this.setState(prevState=>({contacts:[...prevState.contacts, ...contacts], flag:true}))
  }
  componentDidUpdate(){
    localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
  }
  
  submitContact = (data) => {

    const isNameExist= this.state.contacts.some(contact=>contact.name===data.name)
   ! isNameExist
    ? this.setState(prevState => ({
      contacts: [...prevState.contacts, data]
    }))
    : alert(`Write correct name`)
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  nameFilter = (e) => {
    this.setState({
      filter: e.target.value
    });
  };

  getFilteredContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
  };

  render() {
    return (
      <div className={s.container}>
        <CSSTransition
          in={this.state.flag}
          timeout={1500}
          classNames={phone}>
        
        <h1 className={s.h1}>Phonebook</h1>
        </CSSTransition>
        <ContactForm submitContact={this.submitContact} />
        <h2 className={s.h2}>Contacts</h2>
        <Filter nameFilter={this.nameFilter}/>
        <ContactList
          contacts={this.getFilteredContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    )

    }
}
export default App;