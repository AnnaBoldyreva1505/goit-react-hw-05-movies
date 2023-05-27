


import { FooterContainer, Text, Link, Icon, LinksWrapper, List } from './Footer.styled';

export const Footer = () => {
  return (
    <FooterContainer>
      <LinksWrapper>
      <List>
          <Text>Developed by a GoIT student: </Text>
        </List>
        <List>
          <Link href="https://github.com/AnnaBoldyreva1505">
            <Icon />
            GitHub
          </Link>
        </List>
        <List>
          <Link href="https://annaboldyreva1505.github.io/goit-react-hw-05-movies/">Demo</Link>
        </List>
      </LinksWrapper>
    </FooterContainer>
  );
};
