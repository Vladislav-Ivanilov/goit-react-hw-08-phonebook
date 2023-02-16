import { useEffect } from 'react';
import PhoneBookForm from '../components/PhoneBookForm/PhoneBookForm';
import Filter from '../components/Filter/Filter';
import ContactList from '../components/ContactList/ContactList';
import { Container, Title } from '../components/App.styled';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/contacts/operation';

export const ContactsPage = () => {
  console.log('ContactsPage');
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('ContactsPage useEffect');
    dispatch(fetchContacts());
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      <Title>Phonebook</Title>
      <PhoneBookForm />

      <Title>Contacts</Title>
      <Filter />
      <ContactList />
    </Container>
  );
};
