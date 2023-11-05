import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { FormContainer, Button, Label, Input, Text } from './Form.styled';
import { addContact, fetchContacts } from 'Redux/contactReducers';

const Form = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const onSubmit = contact => {
    dispatch(addContact(contact));
    reset();
  };
  return (
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
  );
};

export default Form;
