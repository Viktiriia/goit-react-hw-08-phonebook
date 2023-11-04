import React from 'react'

import { useSelector, useDispatch } from 'react-redux';
import { AuthLink, Wrapper,  Header, Nav, Links, LogOut } from './Navigation.styled'; 
import { selectAuthAuthenticated } from '../../Redux/Authorization/auth.selectors';
import { logOutThunk } from '../../Redux/Authorization/authReducer';

const Navigation = () => {
  const authenticated = useSelector(selectAuthAuthenticated);

  const dispatch = useDispatch()

  const onLogOut = () => {
    dispatch(logOutThunk());

  }
  return (
    < Header>
        <Nav>
        <Wrapper> 
          <Links  className="header-link" to="/">
            Home
          </Links>
          </Wrapper>
          {authenticated ? ( 
            <Wrapper>  <Links className="header-link" to="/contacts">
            Contacts
            </Links>
            <LogOut onClick={onLogOut}>Log Out</LogOut>
            </Wrapper>
        
          ) : (
            <Wrapper>  
            <AuthLink className="header-link" to="/register">
           Register
            </AuthLink>
            <AuthLink className="header-link" to="/login">
           Login
            </AuthLink>
            </Wrapper>
          
         )}
        </Nav>
      </ Header>
  )
}

export default Navigation;



