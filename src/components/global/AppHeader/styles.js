import styled from "styled-components";
import { Link } from "react-router-dom";
import { SubmitButton } from "../../../styles/controllers/buttons";

export const Wrapper = styled.div`
  height: 60px;
  background-color: #000;
  margin-bottom: 30px;
`;

export const Container = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  align-items: center;
`;

export const CustomLink = styled(Link)`
  margin-right: 30px;
  text-decoration: none;
  color: white;

  &:hover {
    color: #dfdfdf;
  }
`;

export const LogoutButton = styled(SubmitButton)`
  margin-left: auto;
`;
