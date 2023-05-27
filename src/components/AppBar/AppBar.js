import { SiThemoviedatabase } from 'react-icons/si';
import { Header, Nav, Ul, Li, StyledLink } from './AppBar.styled';

export const AppBar = () => {
  return (
    <Header>
      <Nav>
        <Ul>
          <Li>
            <SiThemoviedatabase fill="#f50057" size={70} />
          </Li>
          <Li>
            <StyledLink to="/">Home</StyledLink>
          </Li>
          <Li>
            <StyledLink to="/cats">Movies</StyledLink>
          </Li>
        </Ul>
      </Nav>
    </Header>
  );
};
