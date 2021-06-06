import { render, screen } from '@testing-library/react';

import { AuthContextProvider } from './../../../contexts/AuthContext';

import { Form } from '.';

describe('<Register />', () => {
  it('should render Register correctly', () => {
    render(
      <AuthContextProvider>
        <Form />
      </AuthContextProvider>
    );

    expect(screen.getByTestId('username')).toBeInTheDocument();
    expect(screen.getByTestId('password')).toBeInTheDocument();
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