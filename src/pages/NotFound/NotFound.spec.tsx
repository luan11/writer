import { render, screen } from '@testing-library/react';

import { NotFound } from '.';

describe('<NotFound />', () => {
  it('should render NotFound correctly', () => {
    render(<NotFound />);

    expect(screen.getByRole('heading', { name: '404 - Página não encontrada' }))
      .toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<NotFound />);

    expect(container.firstChild).toMatchSnapshot();
  });
});