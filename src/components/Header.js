import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Nav from "./Nav";

const Header = () => {
  return (
    <MainHeader>
      <NavLink to="/">
      <img 
        alt="logo"
        className="logo"
        src ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMcPfqMzPP_Pu1hOxO_UeTEQFzKkcHaGTSOh6HjkyCTCEJNQFd9rXE9_UuoLQhmihkU9c&usqp=CAU"
        width="200%"
  height= "300%"
  border-radius="70%" 
  box-shadow="0 0 10px rgba(0, 0, 0, 0.1)" 
        />
      </NavLink>
      <Nav />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  .logo {
    height: 5rem;
  }
`;
export default Header;