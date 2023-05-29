import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const ButtonGoToBack = styled.button`
  margin-top: 100px;
  margin-bottom: 15px;
  background-color: transparent;
  color: black;
  border: none;
  cursor: pointer;
  font-size: 20px;
  position: relative;
  padding-left: 300px;
  text-transform: uppercase;
  &:before {
    content: '';
    position: absolute;
    left: 110;
    bottom: -2px;
    width: 0;
    height: 2px;
    background: linear-gradient(to right, #9c27b0, #f50057);
    transition: width 0.3s ease;
  }

  &:hover,
  &.active {
    &:before {
      width: 34%;
    }
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 0 300px;
`;

export const ImgContainer = styled.div`
  flex: 0 0 auto;
  margin-right: 20px;
`;

export const AboutFilm = styled.div`
  flex: 1 1 auto;
  position: relative;
`;

export const Title = styled.h2`
font-size: 30px;
  text-transform: uppercase;
  margin: 0;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, #9c27b0, #f50057);
    transition: width 0.3s ease;
  }
`;

export const Raiting = styled.p`
  display: inline-block;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #9c27b0;
  color: white;
  text-align: center;
  line-height: 50px;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom:0;
`

export const H3 = styled.h3`
  margin-bottom: 0;
`

export const Ul = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
`;

export const Li = styled.li`
  /* display: inline-block; */
  margin-top: 10px;
  &:first-child {
  margin-right: 20px; 
}
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: #000000;
  padding: 5px;
  position: relative;
  font-size: 18px;

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
