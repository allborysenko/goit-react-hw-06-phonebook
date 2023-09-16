import { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

import { Contact } from './Contact/Contact';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

const getLSContacts = () => {
  const contacts = localStorage.getItem('contacts');
  if (contacts !== null) {
    return JSON.parse(contacts);
  }
  return [];
};

export const App = () => {
  const [contacts, setContacts] = useState(getLSContacts);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleDelete = e => {
    setContacts(contacts.filter(contact => contact.id !== e));
  };

  const getFilteredContacts = () => {
    const filterContactsList = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });

    return filterContactsList;
  };

  const handleSubmitContact = data => {
    const id = nanoid();
    const name = data.name;
    const number = data.number;
    const contactsLists = [...contacts];

    const alreadyYetContact = contactsLists.find(
      contact => name === contact.name
    );

    if (alreadyYetContact) {
      alert(`${name} is already in contacts.`);
    } else {
      contactsLists.push({ name, id, number });
    }

    setContacts(contactsLists);
  };

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  return (
    <>
      <Section title="Phonebook">
        <Contact onSubmit={handleSubmitContact} />
      </Section>
      <Section title="Contacts">
        <Filter filter={filter} handleChange={handleChange} />
        <ContactList
          contacts={getFilteredContacts()}
          handleDelete={handleDelete}
        />
      </Section>
    </>
  );
};
