import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  transition: transform 0.2s ease;
  height: 12.5rem;
  width: 100%;
  margin: 0;
  background: #fff;
`;

export const CardRightBox = styled.div`
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease;
  height: 100%;
  width: 100%;
  padding: 0.3rem 1rem 1rem 2rem;
  box-sizing: border-box;
  font-family: "Inter", sans-serif;
  font-weight: 400;
  font-size: 14px;
`;

export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
`;

export const Image = styled.img`
  cursor: pointer;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const TitleTrashBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  color: #41414d;
  font-weight: 300;
  cursor: pointer;
`;

export const RemoveButton = styled.div`
cursor: pointer;
`;

export const Description = styled.h3`
  height: 100%;
  font-size: 0.75rem;
  margin: 0.5rem 0;
  font-weight: 400;
  color: #41414d;
  display: -webkit-box;
  -webkit-line-clamp: 3.5;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const QuantityPriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0.5rem;
`;

export const Price = styled.p`
  font-weight: 600;
  font-size: 1rem;
  color: #09090a;
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
