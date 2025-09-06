import { device } from "@/styles/theme";
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
  background-color: #000000;
  height: 2.5rem;
  border-radius: 4px;
  width: 100%;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #141414ff;
  }

  @media ${device.tablet} {
    width: 95%;
  }
`;
