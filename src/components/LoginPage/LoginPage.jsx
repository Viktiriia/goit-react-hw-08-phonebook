import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../Redux/Authorization/authReducer'; 
import { Container, Title, FormBox, Label, Text, Input, SubmitButton} from './LoginPage.styled';

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
      } = useForm();
      const dispatch = useDispatch();
    
      const onSubmit = data => {
        dispatch(loginThunk(data))
        reset();
      };
    
      return (
        <Container>
        <FormBox  onSubmit={handleSubmit(onSubmit)}>
          <Title>Authorization</Title>
          <Label>
            <Text>Email:</Text>
            <Input {...register('email', { required: true })} 
            type="email"
             placeholder="Please enter email address" />
            {errors.email && <span>This field is required</span>}
          </Label>
          <Label>
            <Text>Password:</Text>
            <Input
              {...register('password', { required: true, minLength: 7 })}
              type="password"
              placeholder="Please enter password"
            />
            {errors.password && <span>This field is required</span>}
          </Label>
    
          <SubmitButton type="submit">Sign In</SubmitButton>
        </FormBox>
        </Container>
      );
};

export default LoginPage;





// import {
//   ErrorMessageText,
//   Container,
//   Label,
//   Text,
//   Input,
//   FormBox,
//   SubmitButton,
//   Title,
// } from './LoginForm.styled';


//   return (
//     <Container>
//       <Formik
//         initialValues={initialValues}
//         onSubmit={handleSubmit}
//         validationSchema={userSchema}
//       >
//         <FormBox autoComplete="off">
//           <Title>Authorization</Title>
//           <Label>
//             <Text>
//               <TfiEmail size={20} />
//               Email
//             </Text>
//             <Input
//               placeholder="Please enter your email address"
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
//               placeholder="Please enter your password"
//               type="password"
//               name="password"
//             />
//             <ErrorMessage component={ErrorMessageText} name="password" />
//           </Label>
//           <SubmitButton type="submit">Log In</SubmitButton>
//         </FormBox>
//       </Formik>
//     </Container>
//   );
// };

