import { Form, Field, ErrorMessage } from 'formik';

import styled from 'styled-components';

export const Forma = styled(Form)`
  border: solid 1px #54767f;
  border-radius: 2px;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;
export const Label = styled.label`
  color: #004971;
  font-size: 18px;
  font-weight: 600;
  margin-top: 15px;
  margin-bottom: 5px;
  border-radius: 3px;
`;

export const Input = styled(Field)`
  background-color: #848d8d;
  border: none;
  outline: transparent;
  padding: 10px;
  margin: 0;
`;

export const ErrorMes = styled(ErrorMessage)`
  padding: 5px;
  border: solid 1px #ff2400;
  border-radius: 2px;
  color: #ff2400;
`;

export const Btn = styled.button`
  background-color: #848d8d;
  color: #004971;
  border: none;
  display: block;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 3px;

  &:hover,
  &:focus {
    background-color: #004971;
    color: #848d8d;
  }
`;
