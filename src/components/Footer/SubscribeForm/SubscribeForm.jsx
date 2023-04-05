import { Formik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {
  Form,
  FormInput,
  FormBtn,
  FormWrap,
  FormWrapText,
  ErrorEmail,
} from './SubscribeForm.styled';
import sprite from '../../../img/sprite.svg';
import { toast } from 'react-toastify';
import MediaQuery from 'react-responsive';

const LoginSchema = Yup.object().shape({
  email: Yup.mixed().test({
    name: 'email',
    params: { a: 'test', b: 'qwe' },
    test: value => {
      return /\w+@\w+\.\w{1,5}/.test(value);
    },
  }),
});

export const SubscribeForm = () => {
  const subscribeEmail = async values => {
    try {
      const results = await axios.post(
        `https://soyummy-tw3y.onrender.com/api/v1/auth/subscription`,
        values
      );
      console.log(results.data);
      return results.data;
    } catch (error) {
      throw new Error(error.response.status);
    }
  };
  const getDisabledBtn = (errors, values) => {
    return !values.email || Boolean(errors.email);
  };
  return (
    <>
      <Formik
        initialValues={{ email: '' }}
        validationSchema={LoginSchema}
        onSubmit={(values, actions) => {
          subscribeEmail(values)
            .then(data => {
              toast.success('Check your email');
              actions.resetForm();
            })
            .catch(error => {
              if (error.message === '409') {
                toast.warning('You have already subscribed');
              } else {
                toast.error('Something went wrong');
              }
            })
            .finally(() => actions.setSubmitting(false));
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
            <FormWrap>
              <FormInput
                type="email"
                name="email"
                placeholder="Enter your email address"
                value={props.values.email}
                color={
                  props.errors.email && props.values.email
                    ? 'rgba(255, 255, 255, 0.8)'
                    : undefined
                }
                borderColor={
                  props.errors.email && props.values.email
                    ? 'rgba(255, 255, 255, 0.3)'
                    : undefined
                }
                onChange={props.handleChange}
                onBlur={props.handleBlur}
              />
              <svg>
                <use href={`${sprite}#email`}></use>
              </svg>
            </FormWrap>
            {props.errors.email && props.touched.email && (
              <ErrorEmail>Enter a valid Email</ErrorEmail>
            )}
            <FormBtn
              type="submit"
              disabled={getDisabledBtn(props.errors, props.values)}
            >
              Subcribe
            </FormBtn>
          </Form>
        )}
      </Formik>
    </>
  );
};
