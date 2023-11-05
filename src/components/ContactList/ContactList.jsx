import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Filter from 'components/Filter/Filter';
import { ButtonDel, List, Item } from './ContactList.styled';
import { deleteContact } from 'Redux/contactReducers';
import {
  selectContactsFilterTerm,
  selectContacts,
} from 'Redux/contacts.selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectContactsFilterTerm);
  const filterArray = contacts?.filter(({ name }) =>
    name.toLowerCase().includes(filter.toLowerCase())
  );

  const onDeleteContact = contactId => {
    dispatch(deleteContact(contactId));
  };
  return (
    <>
                <Filter filter={filter} />
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
    </>
  );
};

export default ContactList;
