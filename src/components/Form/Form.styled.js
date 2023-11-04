import { styled } from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  color: white;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  height: 40px;
  font-weight: 400;
  font-size: 25px;
  text-shadow: 1px 1px #000;

  border-radius: 10px;
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

export const Input = styled.input`
  width: 95%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: box-shadow 0.2s ease;

  &::placeholder {
    font-size: 15px;
  }
  &:focus {
    outline: none;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.8);
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  width: 100%;
`;

export const Text = styled.span`
  display: flex;
  gap: 5px;
  align-items: end;
  justify-content: center;
  margin-bottom: 10px;
  font-size: 1.2rem;
`;
