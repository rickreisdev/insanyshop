import styled from "styled-components";

export const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 3.8rem;
  height: 2.3rem;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: #737380;
  background: #f3f5f6;
  border: 1px solid #a8a8b3;
  border-radius: 8px;
`;

export const SelectButton = styled.div`
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
  height: 100%;
  gap: 1.3rem;
`;

export const Chevron = styled.span<{ open?: boolean }>`
  display: inline-block;
  transition: transform 0.2s ease;
  transform: rotate(${(props) => (props.open ? "180deg" : "0deg")});
`;

export const OptionsList = styled.div`
  position: absolute;
  top: 95%;
  left: 0;
  width: 100%;
  margin-top: 0.25rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #fff;
  max-height: 16rem;
  overflow-y: auto;
  z-index: 10;
`;

export const Option = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;

  &:hover {
    background: #f0f0f0;
  }
`;
