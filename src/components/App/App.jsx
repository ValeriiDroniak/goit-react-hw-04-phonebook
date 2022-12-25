import { Component } from 'react';
import { nanoid } from 'nanoid';
import contacts from '../../data/contacts.json';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Section, Title } from './App.styled';

contacts.map(el => (el.id = 'id-' + nanoid(6)));

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    if (!localStorage.getItem('contacts')) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    } else {
      this.setState({ contacts: JSON.parse(localStorage.getItem('contacts')) });
    }
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  addContact = data => {
    const { name, number } = data;
    const newName = name.toLowerCase().trim();
    const foundName = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newName
    );

    if (foundName) {
      return alert(`${name} is already in contacts`);
    }

    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: 'id-' + nanoid(6),
          name: name.trim(),
          number: number.trim(),
        },
      ],
    }));
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  handleChangeFilter = evt => {
    const request = evt.target.value.toLowerCase();
    this.setState({ filter: request });
  };

  getFilteredContacts = () => {
    const { contacts, filter } = this.state;
    filter.toLocaleLowerCase().trim();
    return filter
      ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
      : contacts;
  };

  render() {
    return (
      <>
        <Section bg="#4165f5">
          <Title>Phonebook</Title>
          <ContactForm onSubmit={this.addContact} />
        </Section>

        <Section bg="#4165f5">
          <Title as="h2">Contacts</Title>
          <Filter
            filterValue={this.state.filter}
            onChange={this.handleChangeFilter}
          />
          <ContactList
            contacts={this.getFilteredContacts()}
            deleteContact={this.deleteContact}
          />
        </Section>
      </>
    );
  }
}
