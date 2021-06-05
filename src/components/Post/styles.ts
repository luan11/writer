import styled from 'styled-components';

export const Container = styled.article`
  background: #FFF;
  border-radius: 4px;
  border: 2px solid #e6e3ea;
  padding: 1rem;
  transition: all .35s;
  position: relative;
  overflow: hidden;

  &::after {
    content: '...';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--purple);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFF;
    opacity: 0;
    z-index: -1;
    transition: opacity .35s, z-index 0s .35s;
  }

  &:hover {
    border-color: var(--indigo);
  }

  &.loading {

    &::after {
      transition: opacity .35s, z-index 0s;
      opacity: 0.60;
      z-index: 1;
    }
  }
`;

export const CreatedAt = styled.time`
  font-family: 'Averia Serif Libre', cursive;
  color: var(--gray);
  display: block;
  margin-bottom: 1rem;

  >svg {
    margin-right: 0.35rem;
  }
`;

export const Content = styled.p`
  padding: 0.5rem;
  background: var(--light);
  border-radius: 4px;
  margin-bottom: 1rem;
  font-size: 0.90rem;
  word-wrap: break-word;
`;

export const Author = styled.p`
  font-family: 'Averia Serif Libre', cursive;
  color: var(--gray);
  margin-bottom: 1rem;
  border: 1px solid #e6e3ea;
  border-right: 0;
  border-left: 0;
  padding: 0.5rem;

  >svg {
    margin-right: 0.35rem;
  }
`;

export const Reactions = styled.div`
  width: 100%;
  display: flex;
`;

export const ReactButton = styled.button`
  font-family: 'Averia Serif Libre', cursive;
  border: 0;
  background: transparent;
  display: flex;
  align-items: center;
  font-size: 1.10rem;
  color: var(--indigo);
  transition: all .35s;

  &:first-child {
    color: var(--red);
  }
  
  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:disabled {
    cursor: default;
    opacity: 0.65;
  }

  &:not(:disabled):hover {
    transform: scale(1.15);
  }

  >svg {
    margin-right: 0.5rem;
  }
`;