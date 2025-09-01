import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-bottom: 1px solid #eee;
  padding: 0 5rem;
  box-sizing: border-box;
`;

export const Logo = styled.h1`
  font-size: 1.9rem;
  font-weight: bold;
  color: #5d5d6d;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  text-decoration: none;
`;

export const SearchAndCartWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  min-width: 300px;
  font-family: "Inter", sans-serif;
  color: #737380;
  font-size: 0.9rem;
  border-radius: 8px;
  background-color: #f3f7ff;
  padding: 1rem 1.3rem;
  outline: none;
  border: none;
`;

export const SearchIconWrapper = styled.div`
  position: absolute;
  right: 12px;
  pointer-events: none;
`;

export const SearchBox = styled.input`
  width: 100%;
  height: auto;
  background: none;
  outline: none;
  border: none;
  /* &:focus {
    border-color: #111;
  } */
`;

export const CartButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  position: relative;
  cursor: pointer;

  span {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 14px;
    right: -3px;
    background: #de3838;
    color: #fff;
    font-family: Saira, sans-serif;
    font-size: 0.75rem;
    font-weight: 500;
    width: 17px;
    height: 17px;
    border-radius: 50%;
  }
`;
