import styled from 'styled-components';
import { AiFillGithub } from 'react-icons/ai';
export const FooterContainer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-image: linear-gradient(to right, #ff8a00, #e52e71);
  text-align: center;
`;

export const Text = styled.p`
  color: #fff;
  margin: 0;
`;

export const Link = styled.a`
  color: #fff;
  text-decoration: none;
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;

export const Icon = styled(AiFillGithub)`
  margin-right: 5px;
  background: black;
`;

export const LinksWrapper = styled.ul`
  display: flex;
  justify-content: center;
  padding:0;
`;

export const List = styled.li`
&:not(:last-child){
    margin-right: 10px;
}
`;
