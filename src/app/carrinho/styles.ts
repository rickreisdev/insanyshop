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
  background: #fff;
  width: auto;
  height: 44rem;
  border-radius: 10px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
`;

export const InfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  color: #555;
  margin-top: 0.75rem;
`;

export const SemiBoldTotalLine = styled(InfoLine)`
  font-weight: 600;
  font-size: 1.1rem;
  margin-top: 1rem;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  margin-top: 1.5rem;

  a {
    color: #555;
    font-size: 0.875rem;
    text-decoration: underline;
    cursor: pointer;

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
