import styled from 'styled-components';
import { SiThemoviedatabase } from 'react-icons/si';
import { NavLink } from 'react-router-dom';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;

export const AppBar = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/"><SiThemoviedatabase /></StyledLink>
          </li>
          <li>
            <StyledLink to="/cats">Cats</StyledLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
