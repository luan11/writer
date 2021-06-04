import { ReactNode } from "react";

import { Container } from './styles';

type ContentProps = {
  children: ReactNode;
};

export function Content({ children }: ContentProps) {
  return (
    <Container>
      {children}
    </Container>
  );
}