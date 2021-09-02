import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useState } from 'react';
import Link from 'next/link';
import axios from 'axios';

import styles from '../styles/myform.module.css';

let initialValues = {
  chosen: '',
  firstName: '',
  lastName: '',
  email: '',
  tel: '',
  psc: '',
  ico: '',
  message: '',
  gdpr: false,
};

export default function RequestForm() {
  const [radioData, setRadioData] = useState([false, false, false]);

  const handleRadioClick = (number) => {
    let newRadioData = [false, false, false];
    newRadioData[number] = true;

    setRadioData(newRadioData);
  };

  return (
    <Formik
      initialValues={initialValues}
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
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const res = await axios.post(
          'https://advertialabs.cz/agrokredit/php/request.php',
          JSON.stringify(values)
        );

        console.log(res);

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
          resetForm();
        }, 400);
      }}
    >
      {({ isSubmitting, values }) => (
        <Form id='myForm'>
          <div className={'flex ' + styles.flexin}>
            <div className={styles.fieldWrap2}>
              <div className={styles.card}>
                <div className={styles.cardName} data-id='pudaplus'>
                  Hypo půjčka <br />
                  <b>PŮDA+</b>
                </div>
                <div className={styles.cardField}>
                  <label className={'flex low ' + styles.radioLabel}>
                    <Field
                      type='radio'
                      name='chosen'
                      id='puda'
                      value='puda+'
                      className={styles.checkbox}
                      data-value={radioData[0]}
                      onClick={() => handleRadioClick(0)}
                    />
                    Mám zájem o hypotéční půjčku PŮDA+
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.fieldWrap2}>
              <div className={styles.card}>
                <div className={styles.cardName} data-id='agroplus'>
                  Úvěr <br />
                  <b>AGRO+</b>
                </div>
                <div className={styles.cardField}>
                  <label className={'flex low ' + styles.radioLabel}>
                    <Field
                      type='radio'
                      name='chosen'
                      id='agro'
                      value='agro+'
                      className={styles.checkbox}
                      data-value={radioData[1]}
                      onClick={() => handleRadioClick(1)}
                    />
                    Mám zájem o úvěr AGRO+
                  </label>
                </div>
              </div>
            </div>
            <div className={styles.fieldWrap2}>
              <div className={styles.card}>
                <div className={styles.cardName} data-id='sklizenplus'>
                  Úvěr <br />
                  <b>SKLIZEŇ+</b>
                </div>
                <div className={styles.cardField}>
                  <label className={'flex low ' + styles.radioLabel}>
                    <Field
                      type='radio'
                      name='chosen'
                      id='sklizen'
                      value='sklizen+'
                      className={styles.checkbox}
                      data-value={radioData[2]}
                      onClick={() => handleRadioClick(2)}
                    />
                    Mám zájem o úvěr SKLIZEŇ+
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className='flex'>
            <div className={styles.fieldWrap2}>
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
            <div className={styles.fieldWrap2}>
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
            <div className={styles.fieldWrap2}>
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
          </div>
          <div className='flex'>
            <div className={styles.fieldWrap2}>
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
            <div className={styles.fieldWrap2}>
              <label htmlFor='psc'>Psč</label>
              <Field type='text' id='psc' name='psc' className={styles.field} />
              <ErrorMessage name='psc' component='div' />
            </div>
            <div className={styles.fieldWrap2}>
              <label htmlFor='ico'>Ičo</label>
              <Field type='text' id='ico' name='ico' className={styles.field} />
              <ErrorMessage name='ico' component='div' />
            </div>
          </div>

          <div className={styles.textarea}>
            <label htmlFor='msg'>Poznámka</label>
            <Field
              component='textarea'
              name='message'
              form='myForm'
              id='msg'
              required
            ></Field>
          </div>

          <div className={'flex ' + styles.checkboxWrap}>
            <label className='flex low'>
              <Field
                type='checkbox'
                name='gdpr'
                className={styles.checkbox}
                required
              />
              Souhlasím se zpracováním
              <Link href='/gdpr'>
                <a className={styles.underlined} target='_blank'>
                  {' '}
                  osobních údajů.
                </a>
              </Link>
            </label>
          </div>

          <button type='submit' disabled={isSubmitting}>
            <b>Odeslat zprávu</b>
          </button>
        </Form>
      )}
    </Formik>
  );
}
