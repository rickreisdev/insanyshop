"use client"

import styled from "styled-components";
import { device } from "./theme";

export const LoadingContainer = styled.div`
  padding: 7rem 10rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  color: #535353;

  @media ${device.tablet} {
    padding: 7rem 2.5rem;
  }
`;