"use client";

import { device } from "@/styles/theme";
import styled from "styled-components";

export const Main = styled.main`
  padding: 7rem 10rem;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  font-family: "Inter", sans-serif;

  h1 {
    @media ${device.tablet} {
      font-size: 1.5rem;
      text-align: center;
      margin-top: 2rem;
    }
  }

  @media ${device.mobile} {
    padding: 7rem 1.2rem !important;
  }

  @media ${device.tablet} {
    padding: 7rem 2rem;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ProducCardArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  column-gap: 1rem;
  row-gap: 2rem;
  margin-top: 3.5rem;
  justify-items: center;
  align-items: center;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    grid-template-columns: none;
    margin-top: 2.5rem;
  }
`;
