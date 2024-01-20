import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  box-sizing: border-box;
  margin-left: auto;
  margin-right: auto;
  max-width: 1440px;
  padding: 15px 115px;
  margin-bottom: 16px;
  justify-content: center;
  border-bottom: 1px solid #2a363b;
`;

export const ListNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLink = styled(NavLink)`
  font-size: 18px;

  color: black;

  &.active {
    font-weight: bold;
    color: #3470ff;
    font-size: 20px;
  }
`;
