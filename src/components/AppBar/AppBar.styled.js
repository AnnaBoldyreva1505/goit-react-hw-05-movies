import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background: linear-gradient(to right, #6a1b9a, #9c27b0);
  padding: 10px 30px;
`;

export const Nav = styled.nav``;

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  /* display: inline-block; */
  margin-right: 10px;
  text-transform: uppercase;

  &:last-child {
    margin-right: 0;
  }

  &:first-child {
  margin-right: 40px; /* Измените значение margin здесь */
}
`;



export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #fff;
  padding: 5px;
  position: relative;
  font-size: 25px;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #9c27b0, #f50057);
    transition: width 0.3s ease;
  }

  &:hover,
  &.active {
    &:before {
      width: 100%;
    }
  }
`;



