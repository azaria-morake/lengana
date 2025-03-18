import React from 'react';
import { HeaderContainer, Logo, ContactInfo } from './styles';

const Header = () => {
  return (
    <HeaderContainer>
      <Logo>Lengana Crafts</Logo>
      <ContactInfo>
        <div>info@lengana.co.za</div>
        <div>+27 21 123 4567</div>
      </ContactInfo>
    </HeaderContainer>
  );
};

export default Header;

