import {
  HeaderContainer,
  Navigation,
  StyledLink,
  IconWrapper,
} from './Header.styled';
import sprite from 'assets/sprite.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <Navigation>
        <StyledLink to="/">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          Home
        </StyledLink>
        <StyledLink to="/catalog">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          catalog
        </StyledLink>
        <StyledLink to="/favorites">
          <IconWrapper>
            <use href={`${sprite}#icon-logo`} />
          </IconWrapper>
          favorites
        </StyledLink>
      </Navigation>
    </HeaderContainer>
  );
};
