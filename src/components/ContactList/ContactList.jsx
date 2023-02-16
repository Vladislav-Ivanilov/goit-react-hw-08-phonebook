import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selector';
import { selectContactsFilter } from 'redux/filter/selector';
import { deleteContact } from 'redux/contacts/operation';
import { List, Item, Name, BtnDel } from './ContactList.styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);
  const contacts = useSelector(selectContacts);
  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <List>
      {filteredContacts().map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <Name>{name}</Name>
            <Name>{number}</Name>
            <BtnDel type="button" onClick={() => dispatch(deleteContact(id))}>
              Delete
            </BtnDel>
          </Item>
        );
      })}
    </List>
  );
}
