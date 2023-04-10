import { useDispatch } from 'react-redux';
import { logIn } from '../../../redux/auth/authOperations';
import { Formik } from 'formik';
import * as Yup from 'yup';
import sprite from '../../../img/sprite.svg';
import { getColor } from 'utils/formikColors';
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
  FlagForInput,
  IconPassword,
} from '../AuthForm.styled';
import { LinkRegister } from 'pages/SignIn/SignIn.styled';
const SigninSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .required('No password provided.')
    .min(6, 'Password is too short - should be 6 chars minimum.'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = values => {
    dispatch(logIn(values));
    // console.log(values);
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
        {props => (
          <FormContent>
            <LabelsContent>
              <LabelContainer>
                <Label htmlFor="email">
                  <svg
                    fill={getColor(
                      props.errors.email,
                      props.values.email,
                      'rgba(255, 255, 255, 0.8)'
                    )}
                  >
                    <use href={sprite + '#email'} />
                  </svg>
                </Label>
                {props.values.email && (
                  <FlagForInput>
                    <svg>
                      <use
                        href={`${sprite}${getColor(
                          props.errors.email,
                          props.values.email,
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
                  color={getColor(
                    props.errors.email,
                    props.values.email,
                    'rgba(255, 255, 255, 0.8)'
                  )}
                  bordercolor={getColor(
                    props.errors.email,
                    props.values.email,
                    'rgba(255, 255, 255, 0.3)'
                  )}
                />
                {props.values.email && (
                  <ErrorMessage
                    id="feedback"
                    color={getColor(props.errors.email, props.values.email)}
                  >
                    {props.errors.email}
                  </ErrorMessage>
                )}
              </LabelContainer>
              <LabelContainer>
                <Label htmlFor="password">
                  <IconPassword
                    color={getColor(
                      props.errors.password,
                      props.values.password
                    )}
                  />
                </Label>
                {props.values.password && (
                  <FlagForInput>
                    <svg>
                      <use
                        href={`${sprite}${getColor(
                          props.errors.password,
                          props.values.password,
                          'rgba(255, 255, 255, 0.8)'
                        )}`}
                      ></use>
                    </svg>
                  </FlagForInput>
                )}
                <Input
                  id="password"
                  name="password"
                  placeholder="Password"
                  type="password"
                  color={getColor(
                    props.errors.password,
                    props.values.password,
                    'rgba(255, 255, 255, 0.8)'
                  )}
                  bordercolor={getColor(
                    props.errors.password,
                    props.values.password,
                    'rgba(255, 255, 255, 0.3)'
                  )}
                />
                {props.values.password && (
                  <ErrorMessage
                    id="feedback"
                    color={getColor(
                      props.errors.password,
                      props.values.password
                    )}
                  >
                    {props.errors.password || 'Password is secure'}
                  </ErrorMessage>
                )}
              </LabelContainer>
            </LabelsContent>
            <ButtonSubmit type="submit">Sign in</ButtonSubmit>
          </FormContent>
        )}
      </Formik>
      <LinkRegister to="/register">Registration</LinkRegister>
    </FormContainer>
  );
};
