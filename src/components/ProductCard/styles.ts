import { device } from "@/styles/theme";
import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 19px;
  transition: transform 0.2s ease;
  height: 37.5rem;
  width: 23rem;
  margin: 0;
  border: 1px solid #dddddd;

  @media ${device.tablet} {
    width: 20.5rem;
    height: 37rem;
  }
`;

export const CardBottomBox = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom-left-radius: 19px;
  border-bottom-right-radius: 19px;
  background: #fff;
  transition: transform 0.2s ease;
  height: 47%;
  width: 100%;
  padding: 1rem 1.5rem 0.5rem 1.5rem;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;

  @media ${device.tablet} {
    height: 50%;
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 53%;
  border-top-left-radius: 19px;
  border-top-right-radius: 19px;
  overflow: hidden;

  @media ${device.tablet} {
    height: 50%;
  }
`;

export const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const CategoryRattingBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
`;

export const CategoryInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 0.5rem;
`;

export const Title = styled.h2`
  font-size: 0.9rem;
  margin: 0.5rem 0 0;
  font-weight: 700;
  cursor: pointer;
`;

export const Description = styled.h3`
  font-size: 0.9rem;
  margin: 0.5rem 0;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CategoryPriceStockBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

export const Price = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  color: #1b9847;
`;

export const Stock = styled.p`
  font-weight: 400;
  font-size: 0.9rem;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  height: 2.5rem;
  border-radius: 4px;
  width: 100%;
  color: #ffffff;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #141414ff;
  }
`;
