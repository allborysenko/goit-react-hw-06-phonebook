import propTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../../redux/contactSlise';
import { Wrapper, List, Button } from './ContactList.styled';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const filteredContacts = contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });

  const handleDelete = id => {
    dispatch(deleteContact(id));
  };

  return (
    <Wrapper>
      <ul>
        {filteredContacts.map(contact => (
          <List key={contact.id}>
            {contact.name}: {contact.number}
            <Button type="button" onClick={() => handleDelete(contact.id)}>
              Delete
            </Button>
          </List>
        ))}
      </ul>
    </Wrapper>
  );
};

ContactList.propTypes = {
  contacts: propTypes.arrayOf(
    propTypes.exact({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      number: propTypes.string.isRequired,
    })
  ),
  handleDelete: propTypes.func.isRequired,
};
