import styled from "styled-components";
import { device } from "@/styles/theme";

export const HeaderContainer = styled.header`
  display: flex;
  position: fixed;
  width: 100%;
  height: 5rem;
  align-items: center;
  justify-content: space-between;
  background: #ffffff;
  border-bottom: 1px solid #eee;
  padding: 0 10rem;
  box-sizing: border-box;
  z-index: 1000;

  @media ${device.smallMobile} {
    padding: 0.7rem !important;
  }

  @media ${device.mobile} {
    padding: 0.8rem !important;
  }

  @media ${device.tablet} {
    padding: 1rem 1.5rem;
    height: 4rem;
  }
`;

export const Logo = styled.h1`
  font-size: 1.9rem;
  font-weight: bold;
  color: #5d5d6d;
  cursor: pointer;
  font-family: "Inter", sans-serif;
  text-decoration: none;

  @media ${device.mobile} {
    font-size: 1rem !important;
  }

  @media ${device.tablet} {
    font-size: 1.2rem;
  }
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
  min-width: 22rem;
  height: 2.6rem;
  font-family: "Inter", sans-serif;
  color: #737380;
  font-size: 0.9rem;
  border-radius: 8px;
  background-color: #f3f7ff;
  outline: none;
  border: none;

  @media ${device.smallMobile} {
    margin-left: 0.5rem;
  }

  @media ${device.mobile} {
    min-width: 12rem !important;
  }

  @media ${device.tablet} {
    min-width: 15rem;
  }
`;

export const SearchIconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  right: 12px;

  @media ${device.tablet} {
    top: 15px;
  }
`;

export const SearchBox = styled.input`
  width: 80.5%;
  height: auto;
  background: none;
  outline: none;
  border: none;
  margin-left: 12px;
  font-weight: 400;

  @media ${device.tablet} {
    width: 70%;
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
    width: 15px;
    height: 15px;
    border-radius: 50%;
  }

  @media ${device.smallMobile} {
    right: 20px !important;
  }

  @media ${device.mobile} {
    right: 4px;
  }
`;
