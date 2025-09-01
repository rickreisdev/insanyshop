import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #eee;
  border-radius: 8px;
  padding: 1rem;
  text-align: center;
  background: #fff;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const Image = styled.img`
  max-width: 100%;
  height: 150px;
  object-fit: contain;
`;

export const Title = styled.h2`
  font-size: 1rem;
  margin: 0.5rem 0;
`;

export const Price = styled.p`
  font-weight: bold;
  color: #111;
`;
