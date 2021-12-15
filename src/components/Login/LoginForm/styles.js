import styled from "styled-components";

import { SubmitButton } from "../../../styles/controllers/buttons";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Title = styled.h2`
  margin: 0;
`;

export const TextBox = styled.p``;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0;
`;

export const FormLabel = styled.label`
  margin: 5px;
`;

export const FormInput = styled.input`
  border-radius: 0;
  border: 0;
  border-bottom: 2px solid #f44336;
  font-size: 14px;
  padding: 10px 5px;
  outline: none;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
  }

  &:focus {
    border-bottom: 2px solid red;
  }
`;

export const LoginButton = styled(SubmitButton)`
  margin-top: 20px;
  border-radius: 6px;
  background-color: white;
  border: 2px solid #f44336;
  color: #000;
`;

export const HelperText = styled.p`
  margin-left: auto;
`;

export const LinkText = styled.a`
  text-decoration: none;
  color: #1565c0;
`;
