import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authOperations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { getColor } from 'utils/formikColors';
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
  IconName,
  IconPassword,
  FlagForInput,
} from '../AuthForm.styled';
import { LoginWithGoogle } from 'components/LoginWithGoogle/LoginWithGoogle';

import { Link } from 'pages/SignIn/SignIn.styled';
const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Your password is short')
    .max(16, 'Your password is to long')
    .matches(/[1-9]/, 'Your password is little secure. Add a number!')
    .matches(
      /[a-zа-яA-ZА-ЯіїЇІєЄ]/,
      'Your password is little secure. Add a letter!'
    )
    .matches(/^[a-zа-яA-ZА-ЯіїЇІЄє1-9]/, 'Enter a valid Password*')
    .required('Enter a Password*'),
});

export const RegistrationForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(register(values));
    console.log(values.name);
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
        {({ errors, touched, values }) => (
          <FormContent>
            <LabelsContent>
              <LabelContainer>
                <Label htmlFor="name">
                  <IconName color={getColor(errors.name, values.name)} />
                </Label>
                {values.name && (
                  <FlagForInput>
                    <svg>
                      <use
                        href={`${sprite}${getColor(
                          errors.name,
                          values.name,
                          'rgba(255, 255, 255, 0.8)'
                        )}`}
                      ></use>
                    </svg>
                  </FlagForInput>
                )}
                <Input
                  id="name"
                  name="name"
                  placeholder="Name"
                  color={getColor(
                    errors.name,
                    values.name,
                    'rgba(255, 255, 255, 0.8)'
                  )}
                  bordercolor={getColor(
                    errors.name,
                    values.name,
                    'rgba(255, 255, 255, 0.3)'
                  )}
                />
                {values.name && (
                  <ErrorMessage
                    id="feedback"
                    color={getColor(errors.name, values.name)}
                  >
                    {errors.name}
                  </ErrorMessage>
                )}
              </LabelContainer>
              <LabelContainer>
                <Label htmlFor="email">
                  <svg
                    className="icon"
                    fill={getColor(
                      errors.email,
                      values.email,
                      'rgba(255, 255, 255, 0.8)'
                    )}
                  >
                    <use href={sprite + '#email'} />
                  </svg>
                </Label>
                {values.email && (
                  <FlagForInput>
                    <svg>
                      <use
                        href={`${sprite}${getColor(
                          errors.email,
                          values.email,
                          'rgba(255, 255, 255, 0.8)'
                        )}`}
                      ></use>
                    </svg>
                  </FlagForInput>
                )}
                <Input
                  id="email"
                  name="email"
                  placeholder="Email"
                  type="email"
                  color={getColor(errors.email, values.email)}
                  bordercolor={getColor(
                    errors.email,
                    values.email,
                    'rgba(255, 255, 255, 0.3)'
                  )}
                />
                {values.email && (
                  <ErrorMessage
                    id="feedback"
                    color={getColor(errors.email, values.email)}
                  >
                    {errors.email}
                  </ErrorMessage>
                )}
              </LabelContainer>
              <LabelContainer>
                <Label htmlFor="password">
                  <IconPassword
                    color={getColor(errors.password, values.password)}
                  />
                </Label>
                {values.password && (
                  <FlagForInput>
                    <svg>
                      <use
                        href={`${sprite}${getColor(
                          errors.password,
                          values.password,
                          'rgba(255, 255, 255, 0.8)'
                        )}`}
                      ></use>
                    </svg>
                  </FlagForInput>
                )}
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  color={getColor(errors.password, touched.password)}
                  bordercolor={getColor(
                    errors.password,
                    touched.password,
                    'rgba(255, 255, 255, 0.3)'
                  )}
                />
                {values.password && (
                  <ErrorMessage
                    id="feedback"
                    color={getColor(errors.password, values.password)}
                  >
                    {errors.password}
                  </ErrorMessage>
                )}
              </LabelContainer>
            </LabelsContent>
            <ButtonSubmit register="register" type="submit">
              Sign up
            </ButtonSubmit>
          </FormContent>
        )}
      </Formik>
      <LoginWithGoogle />
      <Link to="/signin">Sign In</Link>
    </FormContainer>
  );
};
