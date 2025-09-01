import styled from "styled-components";

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 1rem 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-bottom: 1px solid #eee;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #111;
  cursor: pointer;
  font-family: 'Inter', sans-serif;
`;

export const SearchBox = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  min-width: 250px;
  outline: none;
  font-size: 0.9rem;

  &:focus {
    border-color: #111;
  }
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    top: -8px;
    right: -10px;
    background: red;
    color: #fff;
    font-size: 0.75rem;
    font-weight: bold;
    padding: 2px 6px;
    border-radius: 50%;
  }
`;
