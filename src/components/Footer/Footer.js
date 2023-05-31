import {
  FooterContainer,
  Text,
  Link,
  Icon,
  LinksWrapper,
  List,
} from './Footer.styled';

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
            Anna Boldyreva
          </Link>
        </List>
        <List>
          <Link href="https://github.com/AnnaBoldyreva1505/goit-react-hw-05-movies">
            Code
          </Link>
        </List>
      </LinksWrapper>
    </FooterContainer>
  );
};
