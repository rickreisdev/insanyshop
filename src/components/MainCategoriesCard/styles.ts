"use client"

import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 13rem;
  height: 7.25rem;
  background: #fff;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  cursor: pointer;
`;

export const Name = styled.h4`
  font-size: 1rem;
  font-weight: 700;
`;

export const Count = styled.span`
  font-size: 1rem;
  font-weight: 400;
`;
