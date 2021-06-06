import { render, screen, fireEvent } from '@testing-library/react';

import { BrowserRouter as Router } from 'react-router-dom';

import { AuthContextProvider } from './../../contexts/AuthContext';

import { Header } from '.';

describe('<Header />', () => {
  it('should render the header with the application title "Writer', () => {
    render(
      <AuthContextProvider>
        <Router>
          <Header />
        </Router>
      </AuthContextProvider>
    );

    expect.assertions(1);

    const title = screen.getByRole('heading', {
      name: 'Writer'
    });

    expect(title).toBeInTheDocument();
  });

  it('should render the header with two navigation element', () => {
    render(
      <AuthContextProvider>
        <Router>
          <Header />
        </Router>
      </AuthContextProvider>
    );

    expect.assertions(1);

    const navs = screen.getAllByRole('navigation');

    expect(navs).toHaveLength(2);
  });
});