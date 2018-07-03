import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationBar = styled.div`
  position: fixed;
  z-index: 1;
  top: 0;
  width: 100%;
  height: 50px;

  text-align: center;
  background-color: #ffffff;
  box-shadow: 0 2px 4px 0 #cccccc;
`;

export const Link = styled(NavLink)`
  line-height: 50px;
  padding: 0 20px;
  text-decoration: none;
  color: #666;

  :hover {
    color: #333;
  }
  &.isActive {
    color: #e0001b;
  }
`;

export const Content = styled.div`
  height: 100%;
  padding-top: 50px;
`;
