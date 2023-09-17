import { nanoid } from 'nanoid';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createContact } from '../../redux/contactSlise';
import { Label, Input, Button } from './Contact.styled';

export const Contact = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const changeName = event => {
    setName(event.target.value);
  };
  const changeNumber = event => {
    setNumber(event.target.value);
  };

  const submitForm = e => {
    e.preventDefault();
    const id = nanoid();
    const alreadyYetContact = contacts.find(contact => name === contact.name);

    if (alreadyYetContact) {
      alert(`${name} is already in contacts.`);
    } else {
      dispatch(createContact({ name, id, number }));
    }
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={submitForm}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="Enter name"
          value={name}
          onChange={changeName}
        />
      </Label>

      <Label>
        Number
        <Input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="Enter phone number"
          value={number}
          onChange={changeNumber}
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </form>
  );
};

