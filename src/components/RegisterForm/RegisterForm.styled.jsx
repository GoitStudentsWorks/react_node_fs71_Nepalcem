import styled from 'styled-components';

import { Field } from 'formik';

export const FormContainer = styled.div`
  width: 335px;
  padding: 40px 24px;

  background-color: #ffffff;
  border-radius: 8px;

  margin-bottom: 18px;

  @media screen and (min-width: 768px) {
    width: 480px;
    padding: 40px;
    margin-bottom: 24px;
  }
`;

export const FormTitle = styled.h1`
  color: #3e85f3;
  text-shadow: 0px 9.399999618530273px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.33333;

  margin-bottom: 32px;

  @media screen and (min-width: 768px) {
    font-size: 24px;
    line-height: 1;
    margin-bottom: 40px;
  }
`;

export const InputContainer = styled.div`
  margin-bottom: 24px;
  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`;

export const Label = styled.label`
  display: block;
  color: #111111;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;

  margin-bottom: 8px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;

export const Input = styled(Field)`
  width: 100%;
  /* height: 46px; */
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.6);
  background: #ffffff;
  padding: 14px;

  color: #111111;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28571;

  &::placeholder {
    color: #dce3e5;
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: 16px;
    line-height: 1.125;
  }
`;