import { Formik } from 'formik';
import { Form, FormInput, FormBtn } from './SubscribeForm.styled';
import sprite from '../../../img/sprite.svg';

export const SubscribeForm = () => {
  return (
    <>
      <Formik initialValues={{ email: `` }}>
        <Form>
          <FormInput type="email" placeholder="Enter your email address" />
          <svg width={16} height={12}>
            <use href={sprite + '#email'}></use>
          </svg>
          <FormBtn type="submit">Subcribe</FormBtn>
        </Form>
      </Formik>
    </>
  );
};
