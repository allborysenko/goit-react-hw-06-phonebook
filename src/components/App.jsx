import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { Contact } from './Contact/Contact';
import { Section } from './Section/Section';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { createContact } from '../redux/contactSlise';

export const App = () => {
  const contacts = useSelector(state => state.contacts);
  // const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const handleSubmitContact = data => {
    const id = nanoid();
    const name = data.name;
    const number = data.number;

    const alreadyYetContact = contacts.find(contact => name === contact.name);

    if (alreadyYetContact) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(createContact({ name, id, number }));
    }
  };

  return (
    <>
      <Section title="Phonebook">
        <Contact onSubmit={handleSubmitContact} />
      </Section>
      <Section title="Contacts">
        <Filter />
        <ContactList />
      </Section>
    </>
  );
};
