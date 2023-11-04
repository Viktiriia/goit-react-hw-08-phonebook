import React from 'react'
import { ContactList } from 'components/ContactList/ContactList'; 
import { Filter } from 'components/Filter/Filter'; 
import Form from 'components/Form/Form'; 
import { Container, Title } from './ContactsPage.styled';  


const ContactsPage = () => {
  return (
    <Container>
    <Title>Phonebook</Title>
     <Form />
   <Title>Contacts </Title>
     <Filter />
     <ContactList />
   </Container>
  )
}

export default ContactsPage