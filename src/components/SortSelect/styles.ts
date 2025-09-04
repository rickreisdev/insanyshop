import styled from "styled-components";

// export const Select = styled.select`
//   min-width: 11.25rem;
//   height: 1.5rem;
//   border: 0;
//   border-radius: 0%;
//   background: none;
//   font-family: "Inter", sans-serif;

//   cursor: pointer;

//   appearance: none;
//   -webkit-appearance: none;
//   -moz-appearance: none;

//   background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20' height='20' fill='none' stroke='%23737380' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><polyline points='6 9 12 15 18 9'/></svg>");
//   background-repeat: no-repeat;
//   background-position: right 0.5rem center;
//   background-size: 0.7rem;

//   &:focus {
//     outline: none;
//     border-color: #555555;
//     box-shadow: none;
//   }

//   option {
//     padding: 0.75rem 1rem
//   }
// `;

// export const SelectWrapper = styled.div`
//   position: relative;
//   display: inline-block;

//   &::after {
//     content: "";
//     font-size: 0.7rem;
//     color: #737380;
//     position: absolute;
//     right: 10px;
//     top: 50%;
//     transform: translateY(-50%);
//     pointer-events: none;
//   }
// `;

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
