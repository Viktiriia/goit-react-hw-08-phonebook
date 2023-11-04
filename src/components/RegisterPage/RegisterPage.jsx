import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../Redux/Authorization/authReducer'; 
import { Container, FormBox, Text, SubmitButton, Title, Label, Input, } from './RegisterPage.styled';

const RegisterPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = data => {
    console.log(data)
    dispatch(registerThunk(data))
    reset();  // скидання полів форм
  };

  return (
    <Container>
    <FormBox onSubmit={handleSubmit(onSubmit)}>
      <Title>Registration</Title>
      <Label>
        <Text>Email:</Text>
        <Input {...register('email', { required: true })} 
        placeholder="Please enter email address"
        type="text"
        name="email" />
        {errors.email && <span>This field is required</span>}
      </Label>
      <Label>
        <Text>Name:</Text>
        <Input {...register('name', { required: true })}  
        placeholder="Please enter a name" 
        type="text" 
        name="name"/>
        {errors.name && <span>This field is required</span>}
      </Label>
      <Label>
        <Text>Password:</Text>
        <Input
          {...register('password', { required: true, minLength: 7 })}
          placeholder="Please enter password"
          type="password"
          name="password"
        />
        {errors.password && <span>This field is required</span>}
      </Label>

      <SubmitButton type="submit">Sign Up</SubmitButton>
    </FormBox>
    </Container>
  );
};

export default RegisterPage;



// import {
//   ErrorMessageText,
 
//  

//   FormBox,

 
// } from './RegisterForm.styled';


//     <Container>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//         validationSchema={userSchema}
//       >
//         <FormBox autoComplete="off">
//           <Title>Registration</Title>
//           <Label>
//             <Text>
//               <FaUserAlt size={20} /> Name
//             </Text>
//             <Input placeholder="Please enter a name" type="text" name="name" />
//             <ErrorMessage component={ErrorMessageText} name="name" />
//           </Label>
//           <Label>
//             <Text>
//               <TfiEmail size={20} />
//               Email
//             </Text>
//             <Input
//               placeholder="Please enter email address"
//               type="text"
//               name="email"
//             />
//             <ErrorMessage component={ErrorMessageText} name="email" />
//           </Label>
//           <Label>
//             <Text>
//               <RiLockPasswordLine size={20} />
//               Password
//             </Text>
//             <Input
//               placeholder="Please enter password"
//               type="password"
//               name="password"
//             />
//             <ErrorMessage component={ErrorMessageText} name="password" />
//           </Label>
//           <SubmitButton type="submit">Sign Up</SubmitButton>
//         </FormBox>
//       </Formik>
//     </Container>
//   );
// };
