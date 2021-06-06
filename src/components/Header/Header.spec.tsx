import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';

import { AuthContextProvider } from './../../contexts/AuthContext';

import { Header } from '.';

describe('<Header />', () => {
  it('should render Header correctly', () => {
    render(
      <AuthContextProvider>
        <Router>
          <Header />
        </Router>
      </AuthContextProvider>
    );

    expect(screen.getByRole('heading', { name: 'Writer' })).toBeInTheDocument();
    expect(screen.getAllByRole('navigation')).toHaveLength(2);
  });

  it('should match snapshot', () => {
    const { container } = render(
      <AuthContextProvider>
        <Router>
          <Header />
        </Router>
      </AuthContextProvider>
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});