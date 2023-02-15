import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'components/Redux/contactsOperation';

import PhoneBookForm from './PhoneBookForm/PhoneBookForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { Container, Title } from './PhoneBook.styled';

const PhoneBook = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

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

export default PhoneBook;
