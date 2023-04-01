import { Formik } from 'formik';
import {
  Form,
  FormInput,
  FormBtn,
  FormWrap,
  FormWrapText,
} from './SubscribeForm.styled';
import sprite from '../../../img/sprite.svg';
import MediaQuery from 'react-responsive';

export const SubscribeForm = () => {
  return (
    <>
      <Formik initialValues={{ email: `` }}>
        <Form>
          <MediaQuery minWidth={1440}>
            <FormWrapText>
              <h2>Subscribe to our Newsletter</h2>
              <p>
                Subscribe up to our newsletter. Be in touch with latest news and
                special offers, etc.
              </p>
            </FormWrapText>
          </MediaQuery>
          <FormWrap>
            <FormInput type="email" placeholder="Enter your email address" />
            <svg>
              <use href={sprite + '#email'}></use>
            </svg>
          </FormWrap>
          <FormBtn type="submit">Subcribe</FormBtn>
        </Form>
      </Formik>
    </>
  );
};
