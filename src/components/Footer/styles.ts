import styled from "styled-components";
import { device } from "@/styles/theme";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  background: #ffffff;
  border-top: 1px solid #eee;
  box-sizing: border-box;
`;

export const FooterText = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: #5d5d6d;
  font-family: "Inter", sans-serif;
  font-size: 0.95rem;

  @media ${device.mobile} {
    font-size: 0.85rem;
  }

  @media ${device.tablet} {
    font-size: 0.9rem;
  }
`;

export const LogoImage = styled.span`
  display: inline-flex;
  align-items: center;
  margin-left: 0.25rem;
`;
