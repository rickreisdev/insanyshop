"use client";

import styled from "styled-components";
import { device } from "@/styles/theme";

export const Main = styled.main`
  padding: 7rem 10rem;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
  font-family: "Inter", sans-serif;

  @media ${device.tablet} {
    padding: 7rem 2rem;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.div``;

export const SingleProductCardArea = styled.div``;

export const SingleProductCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36.25rem;
  width: 100%;

  @media ${device.tablet} {
    flex-direction: column;
    gap: 1rem;
    height: 100%;
  }
`;

export const Image = styled.img`
  width: 42rem;
  height: 100%;
  object-fit: cover;

  @media ${device.tablet} {
    width: 100%;
    height: auto;
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  width: 28rem;
  height: 100%;

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const InfoDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  height: 50%;

  @media ${device.tablet} {
    gap: 1rem;
  }
`;

export const CategoryNamePriceWrapper = styled.div`
  width: 100%;

  span {
    @media ${device.tablet} {
      font-size: 0.9rem !important;
    }
  }

  h1 {
    @media ${device.tablet} {
      font-size: 1.5rem !important;
      margin: 0;
      margin-top: 0.5rem;
    }
  }

  h3 {
    @media ${device.tablet} {
      font-size: 1.2rem !important;
      margin: 0;
      margin-top: 0.1rem;
    }
  }
`;

export const DescriptionWrapper = styled.div`
  width: 100%;

  p {
    @media ${device.tablet} {
      margin-top: 0;
      margin-bottom: 4rem;
    }
  }
`;
