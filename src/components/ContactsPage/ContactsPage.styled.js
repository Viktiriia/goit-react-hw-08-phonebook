import { styled } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  max-width: 500px;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.5);
  box-shadow: 16px 16px 32px #c8c8c8, -16px -16px 32px #fefefe;

`;

export const Title = styled.h2`
  display: block;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: bold;
  font-size: 30px;
  color: blue;
  text-shadow: 2px 2px #000;
`;

