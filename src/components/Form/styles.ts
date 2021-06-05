import styled from 'styled-components';

export const Container = styled.form`
  border-radius: 4px;
  background-color: #FFF;
  padding: 3rem 6rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.075);
  margin: 0 auto;
  width: 50%;

  >.btn {
    display: table;
    margin: 0 auto;
  }
`;

export const Title = styled.h2`
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  margin-bottom: 0.75rem;
  padding-bottom: 0.75rem;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    width: 75px;
    background: var(--indigo);
    height: 2px;
    margin: 0 auto;
  }
`;

export const FormGroup = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 600;
`;

export const Input = styled.input`
  border-radius: 4px;
  border: 2px solid #e6e3ea;
  width: 100%;
  padding: 0.5rem 1rem;
  transition: all .35s ease;
  outline: none;

  &:focus {
    border-color: var(--gray);
  }

  &:not(:placeholder-shown) {
    border-color: var(--indigo);
  }
`;

export const TextArea = styled.textarea`
  border-radius: 4px;
  border: 2px solid #e6e3ea;
  width: 100%;
  padding: 0.5rem 1rem;
  transition: all .35s ease;
  outline: none;
  resize: none;
  height: 135px;

  &:focus {
    border-color: var(--gray);
  }

  &:not(:placeholder-shown) {
    border-color: var(--indigo);
  }

  &::-webkit-scrollbar {
    width: 0.25rem;
  }
  
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: var(--indigo);
    border-radius: 4px;
  }
`;

export const Error = styled.small`
  display: block;
  color: var(--red);
  margin: 0.5rem 0 0;

  &.center {
    text-align: center;
  }

  + .btn {
    margin-top: 0.5rem;
  }
`;

export const Success = styled(Error)`
  color: var(--green);
`;