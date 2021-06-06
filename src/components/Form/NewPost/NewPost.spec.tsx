import { render, screen } from '@testing-library/react';

import { AuthContextProvider } from './../../../contexts/AuthContext';

import { Form } from '.';

describe('<NewPost />', () => {
  it('should render NewPost correctly', () => {
    render(
      <AuthContextProvider>
        <Form />
      </AuthContextProvider>
    );

    expect(screen.getByPlaceholderText('Conteúdo do seu post...')).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(
      <AuthContextProvider>
        <Form />
      </AuthContextProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});