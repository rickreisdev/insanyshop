"use client";

import styled from "styled-components";

export const SingleProductCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 36.25rem;
  width: 100%;
`;

export const Image = styled.img`
  width: 42rem;
  height: 100%;
  object-fit: cover;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: start;
  width: 28rem;
  height: 100%;
`;

export const InfoDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 4rem;
  height: 50%;
`;

export const CategoryNamePriceWrapper = styled.div`
  width: 100%;
`;

export const DescriptionWrapper = styled.div`
  width: 100%;
`;
