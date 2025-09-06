"use client";

import { device } from "@/styles/theme";
import styled from "styled-components";

export const Main = styled.main`
  padding: 7rem 10rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  align-items: center;
  font-family: "Inter", sans-serif;

  @media ${device.mobile} {
    padding: 7rem 1.2rem !important;
  }

  @media ${device.tablet} {
    padding: 7rem 2.5rem;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Container = styled.main`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 2rem;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;

  font-family: "Inter", sans-serif;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const CartArea = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  #page-title {
    @media ${device.tablet} {
      font-size: 1.3rem !important;
    }
  }

  #page-total {
    @media ${device.tablet} {
      font-size: 0.9rem !important;
    }
  }
`;

export const Summary = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background: #fff;
  width: 20rem;
  height: 42rem;

  h2 {
    margin: 0;
    margin-bottom: 1rem;

    @media ${device.tablet} {
      font-size: 1.1rem !important;
    }
  }

  @media ${device.tablet} {
    width: 100%;
    height: 18.6rem;
    padding: 1rem;
  }
`;

export const InfoArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40%;
`;

export const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  color: #555;
  margin-top: 0.75rem;
  margin: 0;

  @media ${device.tablet} {
    font-size: 0.9rem;
    margin-bottom: 0.7rem;
  }
`;

export const SemiBoldTotalLine = styled(InfoLine)`
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 1rem;
  border-top: 1px solid #dce2e5;
  padding-top: 0.7rem;

  @media ${device.tablet} {
    font-size: 0.9rem;
    margin-top: 0.5rem;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
  margin-top: 1.5rem;

  a {
    color: #737380;
    font-size: 0.875rem;
    text-decoration: underline;
    text-transform: uppercase;
    cursor: pointer;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #000;
    }

    @media ${device.tablet} {
      font-size: 0.75rem;
      text-align: center;
    }
  }

  @media ${device.tablet} {
    margin-top: 0;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    padding-top: 1rem;
    border-top: 1px solid #dce2e5;
  }
`;

export const EmptyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: "Inter", sans-serif;

  h2 {
    @media ${device.tablet} {
      font-size: 1.1rem !important;
    }
  }

  h3 {
    @media ${device.tablet} {
      font-size: 1rem !important;
    }
  }
`;

export const CartIcon = styled.div`
  background: none;
  border: none;
  margin-top: 2.5rem;
`;
