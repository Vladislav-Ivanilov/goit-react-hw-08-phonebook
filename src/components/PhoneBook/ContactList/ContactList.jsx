import { useDispatch, useSelector } from 'react-redux';

import { deleteContact } from 'components/Redux/contactsOperation';
import { List, Item, Name, BtnDel } from '../PhoneBook.styled';
import { getContacts, getContactsFilter } from 'components/Redux/selector';

export default function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(getContactsFilter);
  const contacts = useSelector(getContacts);
  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <List>
      {filteredContacts().map(({ id, name, phone }) => {
        return (
          <Item key={id}>
            <Name>{name}</Name>
            <Name>{phone}</Name>
            <BtnDel type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </BtnDel>
          </Item>
        );
      })}
    </List>
  );
}
