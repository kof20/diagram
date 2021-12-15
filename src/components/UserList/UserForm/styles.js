import styled from "styled-components";

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
  background-color: #f7f7f7;
  padding: 10px;
`;

export const FormControl = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  margin-bottom: 0;
`;

export const FormLabel = styled.label`
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const FormInput = styled.input`
  border: 0;
  border-bottom: 2px solid #f44336;
  font-size: 16px;
  padding: 10px 15px;
  outline: none;

  &:focus {
    border-color: red;
  }
`;

export const FormSelect = styled.select`
  cursor: pointer;
  font-size: 16px;
  background: white;
  color: gray;
  padding: 10px 15px;
  border: 0;
  border-bottom: 2px solid #f44336;
`;

export const FormSelectOption = styled.option`
  color: black;
`;
