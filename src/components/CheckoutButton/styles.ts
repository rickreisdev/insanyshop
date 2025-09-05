import styled from "styled-components";

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1B9847;
  height: 2.75rem;
  border-radius: 4px;
  width: 100%;
  color: #F5F5FA;
  font-family: Saira, sans-serif;
  font-size: 1rem;
  font-weight: 500;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #167838ff;
  }
`;