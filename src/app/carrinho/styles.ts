"use client";

import styled from "styled-components";

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
`;

export const CartArea = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Summary = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background: #fff;
  width: 20rem;
  height: 42rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);

  h2 {
    margin: 0;
    margin-bottom: 1rem;
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
`;

export const SemiBoldTotalLine = styled(InfoLine)`
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 1rem;
  border-top: 1px solid #dce2e5;
  padding-top: 0.7rem;
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
  }
`;

export const EmptyContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: "Inter", sans-serif;
`;

export const CartIcon = styled.div`
  background: none;
  border: none;
  margin-top: 2.5rem;
`;
