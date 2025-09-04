import styled from "styled-components";

export const SelectWrapper = styled.div`
  position: relative;
  width: 12rem;
  font-family: "Inter", sans-serif;
  font-size: 0.9rem;
  font-weight: 400;
  color: #737380;
`;

export const SelectButton = styled.div`

  border: none;
  border-radius: 8px;
  background: transparent;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Chevron = styled.span<{ open?: boolean }>`
  display: inline-block;
  transition: transform 0.2s ease;
  transform: rotate(${(props) => (props.open ? "180deg" : "0deg")});
`;

export const OptionsList = styled.div`
  position: absolute;
  top: 120%;
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
