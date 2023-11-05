import React from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import Filter from 'components/Filter/Filter';
import { Container, Title } from './ContactsPage.styled';
import Loader from 'components/Loader';
import {
  ButtonDel,
  List,
  Item,
} from 'components/ContactList/ContactList.styled';
import { deleteContact } from 'Redux/asyncRedux/contactReducers';
import {
  selectContacts,
  selectContactsIsLoading,
  selectContactsFilterTerm,
  
} from 'Redux/contacts.selectors';
import {
  FormContainer,
  Button,
  Label,
  Input,
  Text,
} from 'components/Form/Form.styled';
import { addContact, fetchContacts } from 'Redux/asyncRedux/contactReducers';

const ContactsPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectContactsIsLoading);
  const filter = useSelector(selectContactsFilterTerm);
  const filterArray = contacts?.filter(({ name }) =>
  name.toLowerCase().includes(filter.toLowerCase())
);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onSubmit = contact => {
    dispatch(addContact(contact));
    reset();
  };

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Container>
      <Title>Phonebook</Title>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContainer>
          <Label>
            <Text>Name</Text>
            <Input
              {...register('name', { required: true })}
              type="text"
              placeholder="Please enter name"
            />
            {errors.name && <span>This field is required</span>}
          </Label>
          <Label>
            <Text>Number</Text>
            <Input
              {...register('number', { required: true })}
              type="text"
              placeholder="Please enter number"
            />
            {errors.number && <span>This field is required</span>}
          </Label>
          <Button type="submit">Add contact</Button>
        </FormContainer>
      </form>
      <Title>Contacts </Title>
      <Filter filter={filter} />
      {isLoading && <Loader />}
      <List>
        {Array.isArray(contacts) &&
         filterArray.map(contact => {
            return (
              <Item key={contact.id}>
                {contact.name} : {contact.number}
                <ButtonDel onClick={() => onDeleteContact(contact.id)}>
                  Delete
                </ButtonDel>
              </Item>
            );
          })}
      </List>
    </Container>
  );
};

export default ContactsPage;
