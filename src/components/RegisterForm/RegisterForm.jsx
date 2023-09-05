import React, { useState } from 'react';
// Стилізовані компоненти
import {
  ErrorMessage,
  FormContainer,
  FormTitle,
  InputContainer,
  Label,
  Field,
  SignUpIcon,
  TextShow,
} from './RegisterForm.styled';
import SignUpSVG from '../../images/svg/log-in.svg';

// Бібліотека формік
import { Formik, Form } from 'formik';

// Бібліотека валідації форми yup
import * as yup from 'yup';
import { Button } from 'components/Button/Button';
import { useDispatch } from 'react-redux';
import authOperations from 'redux/auth/authOperations';

// Схма валідації форми!!!!!!
// ПЕРЕВІРИТИ ШОБ ЗБІГАЛАСЬ З БЕКЕНДОМ
// https://www.npmjs.com/package/yup
const schema = yup.object().shape({
  name: yup.string().required().matches().min(4).max(16),
  email: yup
    .string()
    .email()
    .matches(
      /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
      'Email must contain only Latin characters'
    )
    .required(),
  password: yup
    .string()
    .required()
    .matches(
      /(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
      'Password requires min 8 characters long, one UPPERCASE, one lowercase letter'
    )
    .min(8),
});

//  Компонент форми
const RegisterForm = () => {
  // початкові значення полів форми
  const [passwordShown, setPasswordShown] = useState(false);

  const dispatch = useDispatch();

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };
  // Обробник сабміту
  const handleSubmit = (values, actions) => {
    
    const { name, email, password } = values;
    dispatch(authOperations.register({ username: name, email, password }));
    // у обʼєкт values повертаються дані з форми
    // тут буде проходити реєстрація
    actions.resetForm();
  };

  return (
    <FormContainer>
      <FormTitle>Sign Up</FormTitle>
      <Formik
        initialValues={{ name: '', email: '', password: '' }}
        onSubmit={handleSubmit}
        validationSchema={schema}
      >
        {({ errors, touched }) => {
          const isValid = field =>
            touched[field] && errors[field]
              ? 'is-invalid'
              : touched[field]
              ? 'is-valid'
              : '';
          return (
            <Form autoComplete="off">
              <InputContainer>
                <Label htmlFor="name" className={isValid('name')}>
                  Name
                </Label>

                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className={isValid('name')}
                />

                <ErrorMessage name="name" component="div" />
              </InputContainer>

              <InputContainer>
                <Label htmlFor="email" className={isValid('email')}>
                  Email
                </Label>

                <Field
                  type="text"
                  name="email"
                  placeholder="Enter email"
                  className={isValid('email')}
                />

                <ErrorMessage name="email" component="div" />
              </InputContainer>

              <InputContainer>
                <Label htmlFor="name" className={isValid('password')}>
                  Password
                </Label>
                <Field
                  // type="password"
                  name="password"
                  placeholder="Enter password"
                  type={passwordShown ? 'text' : 'password'}
                  className={isValid('password')}
                />
                <TextShow onClick={togglePassword}>
                  {passwordShown ? 'Hide' : 'Show'}
                </TextShow>

                <ErrorMessage name="password" component="div" />
              </InputContainer>

              <Button
                textButton="Sign Up"
                type="submit"
                svg={<SignUpIcon src={SignUpSVG} />}
              ></Button>
            </Form>
          );
        }}
      </Formik>
    </FormContainer>
  );
};

export default RegisterForm;
