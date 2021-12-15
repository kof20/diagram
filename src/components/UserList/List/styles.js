import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`;

export const Title = styled.h2`
  font-weight: normal;
`;

export const ListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e57373;
  padding: 0px 5px 5px 5px;
`;

export const Column = styled.div`
  flex-basis: 20%;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const EmptyResult = styled.p`
  font-weight: normal;
  color: #000;
`;

export const Row = styled.div`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 20px;

  &:nth-child(even) {
    background-color: #ffebee;
  }
`;
