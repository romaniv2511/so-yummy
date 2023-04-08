import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import sprite from '../../../img/sprite.svg';
import {
  TitleForm,
  FormContainer,
  FormContent,
  Input,
  Label,
  LabelContainer,
  ButtonSubmit,
  ErrorMessage,
} from '../AuthForm.styled';

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.'),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(register(data));
    console.log(data);
  };
  return (
    <FormContainer>
      <TitleForm register="register">Registration</TitleForm>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={SignupSchema}
      >
        {({ errors, touched }) => (

            <FormContent>
              <LabelContainer>
                <Label htmlFor="name">
                  <svg>
                    <use href={sprite + '#icon-name'} />
                  </svg>
                </Label>
                <Input id="name" name="name" placeholder="Name" />
                {errors.name && touched.name ? (
                  <ErrorMessage>{errors.name}</ErrorMessage>
                ) : null}
              </LabelContainer>
              <LabelContainer>
                <Label htmlFor="email">
                  <svg>
                    <use href={sprite + '#icon-email'} />
                  </svg>
                </Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                />
                {errors.email && touched.email ? (
                  <ErrorMessage>{errors.email}</ErrorMessage>
                ) : null}
              </LabelContainer>
              <LabelContainer>
                <Label htmlFor="password">
                  <svg>
                    <use href={sprite + '#icon-password'} />
                  </svg>
                </Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                />
                {errors.password && touched.password ? (
                  <ErrorMessage>{errors.password}</ErrorMessage>
                ) : null}
              </LabelContainer>
              <ButtonSubmit register="register" type="submit">
                Sign up
              </ButtonSubmit>
            </FormContent>

        )}
      </Formik>
    </FormContainer>
  );
};
