import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Container = styled.header`
  background: #FFF;
  width: 100%;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.10);
  height: 75px;
  overflow: hidden;

  >.container {
    display: flex;
    align-items: center;
    height: 100%;

    >h1 {
      margin: 0;
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  margin-left: auto;
  
  &:first-of-type {
    margin-left: 2rem;
  }
`;

export const MyNavLink = styled(NavLink)`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 0.5rem;
  position: relative;
  font-weight: 600;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    height: 4px;
    width: 100%;
    background: var(--indigo);
    transition: transform .30s ease-in-out;
    transform: translateY(100%);
  }

  &:hover,
  &.active {    
    color: var(--indigo);

    &::after {
      transform: translateY(0);
    }
  }

  &:not(:last-child) {
    margin-right: 1rem;
  }
`;