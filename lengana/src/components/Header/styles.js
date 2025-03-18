import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: #2c3e50;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const ContactInfo = styled.div`
  text-align: right;
  font-size: 0.9rem;
`;