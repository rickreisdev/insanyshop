"use client";

import styled from "styled-components";
import { device } from "@/styles/theme";

export const Main = styled.main`
  padding: 7rem 10rem;
  width: 100%;
  box-sizing: border-box;

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

  @media ${device.mobile} {
    gap: 1.5rem;
  }
`;

export const Container = styled.div`
  h1 {
    @media ${device.tablet} {
      font-size: 1.5rem;
      text-align: center;
    }

    @media ${device.laptop} {
      text-align: center;
    }
  }
`;

export const ProducCardArea = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(23rem, 1fr));
  column-gap: 1rem;
  row-gap: 2rem;
  margin-top: 2rem;
  justify-items: center;
  align-items: center;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    grid-template-columns: none;
  }
`;

export const MainCategoriesContainer = styled.div`
  @media ${device.laptop} {
    margin-top: 5rem;
  }
`;

export const MainCategoriesArea = styled.div`
  @media ${device.laptop} {
    flex-direction: column;
    gap: 1rem;
  }
`;
