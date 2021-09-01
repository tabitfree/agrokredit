import { Formik, Form, Field, ErrorMessage } from 'formik';
import Link from 'next/link';

import styles from '../styles/myform.module.css';

export default function MyForm() {
  return (
    <Formik
      initialValues={{
        firstName: '',
        lastName: '',
        email: '',
        tel: '',
        message: '',
        toggle: false,
      }}
      validate={(values) => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form id='myForm'>
          <div className='flex'>
            <div className={styles.fieldWrap}>
              <label htmlFor='fn'>Jméno</label>
              <Field
                type='text'
                id='fn'
                name='firstName'
                className={styles.field}
                required
              />
              <ErrorMessage name='firstName' component='div' />
            </div>
            <div className={styles.fieldWrap}>
              <label htmlFor='ln'>Příjmení</label>
              <Field
                type='text'
                id='ln'
                name='lastName'
                className={styles.field}
                required
              />
              <ErrorMessage name='password' component='div' />
            </div>
          </div>
          <div className='flex'>
            <div className={styles.fieldWrap}>
              <label htmlFor='em'>E-mail</label>
              <Field
                type='email'
                id='em'
                name='email'
                className={styles.field}
                required
              />
              <ErrorMessage name='mail' component='div' />
            </div>
            <div className={styles.fieldWrap}>
              <label htmlFor='tel'>Telefonní číslo</label>
              <Field
                type='tel'
                id='tel'
                name='tel'
                className={styles.field}
                required
              />
              <ErrorMessage name='tel' component='div' />
            </div>
          </div>

          <div>
            <label htmlFor='msg'>Zpráva</label>
            <Field
              component='textarea'
              name='message'
              form='myForm'
              id='msg'
            ></Field>
          </div>

          <div className='flex center'>
            <label className='flex low'>
              <Field
                type='checkbox'
                name='toggle'
                className={styles.checkbox}
                required
              />
              Souhlasím se zpracováním
              <Link href='/gdpr'>
                <a target='_blank' className={styles.underlined}>
                  {' '}
                  osobních údajů.
                </a>
              </Link>
            </label>
          </div>

          <div className='btnWrap'>
            <button type='submit' disabled={isSubmitting}>
              <b>Odeslat zprávu</b>
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
}
