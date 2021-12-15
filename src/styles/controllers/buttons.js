import styled from "styled-components";

export const DefaultButton = styled.button`
  border: 0;
  background-color: #000;
  color: #fff;
  cursor: pointer;
  padding: 10px 30px;
  max-height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: -1px 2px 0px 1px #0000001c;
`;

export const SubmitButton = styled(DefaultButton)`
  background-color: #fff;
  border: 2px solid red;
  color: black;
  border-radius: 6px;
`;

export const RemoveButton = styled(DefaultButton)`
  background-color: #fff;
  border: 2px solid #ff5722;
  color: black;
  border-radius: 6px;
`;
