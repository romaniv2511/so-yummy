// import { unwrapResult } from '@reduxjs/toolkit';
// import { useDispatch } from 'react-redux';
// import { toast } from 'react-hot-toast';
// import {
//   MdOutlineAccountCircle,
//   MdAlternateEmail,
//   MdOutlinePassword,
//   MdOutlineLogin,
// } from 'react-icons/md';
// import { BsPatchExclamation } from 'react-icons/bs';
// import { Form, Label, Input, LoginBtn } from './LogInForm.styled';
// import { useAuth } from 'hooks/useAuth';
// import { logIn } from 'redux/auth/authOperations';
// import { Loader } from 'components/reusables/Loader/Loader';


// export const LoginForm = () => {
//   const dispatch = useDispatch();
//   const { isLoading } = useAuth();
//
//   const handleSubmit = evt => {
//     evt.preventDefault();
//     const form = evt.currentTarget;
//     dispatch(
//       logIn({
//         email: form.elements.email.value,
//         password: form.elements.password.value,
//       })
//     )
//       .then(unwrapResult)
//       .then(response => {
//         alert(`You have successfully logged in as ${response.user.name}!`)
//         // toast(`You have successfully logged in as ${response.user.name}!`, {
//         //   icon: <MdOutlineAccountCircle size={25} color="#327047" />,
//         // });
//       })
//       .catch(() =>
//         alert("Something wrong. Please check the information and try again")
//         // toast(`Something's wrong. Please check the information and try again.`, {
//         //   icon: <BsPatchExclamation size={25} color="#aa8c3f" />,
//         // })
//       );
//     form.reset();
//   };
//
//   return isLoading ? (
//     <Loader />
//   ) : (
//     <Form onSubmit={handleSubmit} autoComplete="off">
//       <Label>
//         <MdAlternateEmail size={28} color="#364a4a" />
//         <Input type="email" name="email" placeholder="email@mail.com" required />
//       </Label>
//       <Label>
//         <MdOutlinePassword size={28} color="#364a4a" />
//         <Input type="password" name="password" placeholder="password" required />
//       </Label>
//       <LoginBtn type="submit">
//         Log In
//         <MdOutlineLogin size={20} color="rgb(77, 104, 104)" />
//       </LoginBtn>
//     </Form>
//   );
// };


import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/authOperations';
import { Formik, Form, Field } from 'formik';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit =(data) => {
    dispatch(logIn(data));
    console.log(data);

  }
  return (
    <Formik
      initialValues = {{
        email:'',
        password: '',}
      }
      onSubmit={handleSubmit}
    >
      <Form>
        <label htmlFor="email">Email</label>
        <Field
          id="email"
          name="email"
          placeholder="jane@acme.com"
          type="email"
        />
        <label htmlFor="password">password</label>
        <Field id="password" name="password" placeholder="Jane" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  )
}

