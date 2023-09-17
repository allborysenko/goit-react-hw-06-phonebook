import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Contact } from './Contact/Contact';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { createContact } from '../redux/contactSlise';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

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
    dispatch(createContact({ name, id, number }));
  };

  return (
    <>
      <Section title="Phonebook">
        <Contact onSubmit={handleSubmitContact} />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList contacts={getFilteredContacts()} />
      </Section>
    </>
  );
};
