import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Header = styled.header`
  padding: 3px 30px;
  display: flex;
  gap: 20px;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  background: linear-gradient(
    90deg,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  & a {
    color: #fff;
    transition: border-radius 0.2s ease, background 0.2s ease, color 0.2s ease,
      box-shadow 0.2s ease;
  }

  & a.active {
    padding: 5px;
    color: rgb(0, 0, 0);
    border-radius: 15px;
    background: rgba(227, 227, 227, 0.3);
    box-shadow: 0px 5px 10px rgba(0, 1, 0, 0.1);
  }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 30px;

  & :hover {
    background-color: blue;
    border-radius: 15px;
    color: white;
  }
`;

export const AuthLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  text-decoration: none;
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;

export const Links = styled(NavLink)`
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
`;

export const LogOut = styled.button`
  padding: 5px 20px;
  display: inline-flex;
  margin-right: auto;
  align-items: center;
  font-size: 14px;
  border-radius: 20px;
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
