import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import contactsData from '../../data/contacts.json';
import { ContactForm } from '../ContactForm/ContactForm';
import { ContactList } from '../ContactList/ContactList';
import { Filter } from '../Filter/Filter';
import { Section, Title } from './App.styled';

contactsData.map(el => (el.id = 'id-' + nanoid(6)));

export const App = () => {
  const [filter, setFilter] = useState('');
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? contactsData
    // ?? []
  );

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = data => {
    const { name, number } = data;
    const newName = name.toLowerCase().trim();
    const foundName = contacts.find(
      contact => contact.name.toLowerCase() === newName
    );

    if (foundName) {
      return alert(`${name} is already in contacts`);
    }

    setContacts(prevState => [
      ...prevState,
      {
        id: 'id-' + nanoid(6),
        name: name.trim(),
        number: number.trim(),
      },
    ]);
  };

  const deleteContact = id => {
    setContacts(prevState => prevState.filter(el => el.id !== id));
  };

  const handleChangeFilter = evt => {
    const request = evt.target.value.toLowerCase();
    setFilter(request);
  };

  const getFilteredContacts = () => {
    filter.toLocaleLowerCase().trim();
    return filter
      ? contacts.filter(contact => contact.name.toLowerCase().includes(filter))
      : contacts;
  };

  return (
    <>
      <Section bg="#4165f5">
        <Title>Phonebook</Title>
        <ContactForm onSubmit={addContact} />
      </Section>

      <Section bg="#4165f5">
        <Title as="h2">Contacts</Title>
        <Filter filterValue={filter} onChange={handleChangeFilter} />
        {contacts && (
          <ContactList
            contacts={getFilteredContacts()}
            deleteContact={deleteContact}
          />
        )}
      </Section>
    </>
  );
};
