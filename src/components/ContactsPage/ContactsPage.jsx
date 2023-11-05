import React from 'react';
import { Container, Title } from './ContactsPage.styled';
import Form from 'components/Form/Form';
import Loader from 'components/Loader';
import ContactList from 'components/ContactList/ContactList';
import { selectContactsIsLoading } from 'Redux/contacts.selectors';
import { useSelector } from 'react-redux';

const ContactsPage = () => {
  const isLoading = useSelector(selectContactsIsLoading);

  return (
    <Container>
      <Title>Phonebook</Title>
      <Form />
      <Title>Contacts </Title>
      {isLoading && <Loader />}
      <ContactList />
    </Container>
  );
};

export default ContactsPage;
