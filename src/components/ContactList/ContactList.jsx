import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/contacts/selector';
import { selectContactsFilter } from 'redux/filter/selector';
import { deleteContact } from 'redux/contacts/operation';
import { Container, Section, Button } from '../App.styled';
import { List, Item, Name } from './ContactList.styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const filter = useSelector(selectContactsFilter);
  const contacts = useSelector(selectContacts);
  const filteredContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <Container>
      <Section>
        <List>
          {filteredContacts().map(({ id, name, number }) => {
            return (
              <Item key={id}>
                <Name>{name}</Name>
                <Name>{number}</Name>
                <Button
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </Button>
              </Item>
            );
          })}
        </List>
      </Section>
    </Container>
  );
}
