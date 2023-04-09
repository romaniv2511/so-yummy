import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/authOperations';
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
  LabelsContent,
} from '../AuthForm.styled';

const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = data => {
    dispatch(logIn(data));
    console.log(data);
  };

  return (
    <FormContainer>
      <TitleForm>Sign In</TitleForm>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
        validationSchema={SigninSchema}
      >
        {({ errors, touched }) => (
          <FormContent>
            <LabelsContent>
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
                  placeholder="Password"
                  type="password"
                />
                {errors.password && touched.password ? (
                  <ErrorMessage>{errors.password}</ErrorMessage>
                ) : null}
              </LabelContainer>
            </LabelsContent>
            <ButtonSubmit type="submit">Sign in</ButtonSubmit>
          </FormContent>
        )}
      </Formik>
    </FormContainer>
  );
};
