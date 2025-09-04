import styled from "styled-components";

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  height: 0.9rem;
  width: 5rem;
  color: #617480;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;
`;

export const ButtonIconBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 1.5rem;
  background: transparent;
  border: 2px solid #617480;
  border-radius: 50%;
`;
