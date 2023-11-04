import { styled } from 'styled-components';

export const ButtonDel = styled.button`
  padding: 5px 20px;
  display: inline-flex;
  margin-left: 20px;  
  font-size: 14px;
  border-radius: 6px;
  border: 1px solid;
  color: white;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 5px 10px, rgba(0, 0, 0, 0.12) 0px -3px 5px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 3px 5px,
    rgba(0, 0, 0, 0.09) 0px -3px 2px;
    background: linear-gradient(
    90deg,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  &:hover {
    background: blue;
  }


`;

export const List = styled.ul`
list-style-type: none;
  margin-top: 20px;
`;

export const Item = styled.li`
display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;