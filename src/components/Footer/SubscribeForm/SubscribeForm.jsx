import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
  Form,
  FormInput,
  FormBtn,
  FormWrapText,
  FlagForInput,
} from './SubscribeForm.styled';
import sprite from '../../../img/sprite.svg';
import { ToastContainer, toast } from 'react-toastify';
import MediaQuery from 'react-responsive';
import { useAuth } from 'hooks/useAuth';
import { getColor } from 'utils/formikColors';
import 'react-toastify/dist/ReactToastify.css';
const LoginSchema = Yup.object().shape({
  email: Yup.mixed().test({
    name: 'email',
    test: value => {
      return /\w+@\w+\.\w{1,5}/.test(value);
    },
  }),
});
export const SubscribeForm = () => {
  const { token } = useAuth();
  const subscribeEmail = async values => {
    try {
      const results = await axios.post(
        `https://soyummy-tw3y.onrender.com/api/v1/auth/subscription`,
        values,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      return results.data;
    } catch (error) {
      throw new Error(error.response.status);
    }
  };
  const getBtn = (errors, value) => !value.email || errors.email;
  return (
    <>
      <ToastContainer autoClose={2500} />
      <Formik
        initialValues={{ email: `` }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          subscribeEmail({ email: values.email })
            .then(r => toast.success('Сheck your email'))
            .catch(error => {
              if (error === 200) {
                toast.warning('Unauthorized');
              }
              toast.error('Something went wrong');
            });
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {props => (
          <Form onSubmit={props.handleSubmit}>
            <MediaQuery minWidth={1440}>
              <FormWrapText>
                <h2>Subscribe to our Newsletter</h2>
                <p>
                  Subscribe up to our newsletter. Be in touch with latest news
                  and special offers, etc.
                </p>
              </FormWrapText>
            </MediaQuery>
            <FormInput
              type="email"
              placeholder="Enter your email address"
              onBlur={props.handleBlur}
              onChange={props.handleChange}
              value={props.values.email}
              name="email"
              color={getColor(
                props.errors.email,
                props.values.email,
                'rgba(255, 255, 255, 0.8)'
              )}
              borderColor={getColor(
                props.errors.email,
                props.values.email,
                'rgba(255, 255, 255, 0.3)'
              )}
            />
            <svg
              className="icon"
              fill={getColor(
                props.errors.email,
                props.values.email,
                'rgba(255, 255, 255, 0.8)'
              )}
            >
              <use href={sprite + '#email'}></use>
            </svg>
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

            {props.errors.email && props.values.email && (
              <ErrorMessage className="error" name="email" component="div" />
            )}
            <FormBtn
              type="submit"
              disabled={getBtn(props.errors, props.values)}
            >
              Subcribe
            </FormBtn>
          </Form>
        )}
      </Formik>
    </>
  );
};
