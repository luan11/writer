import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';

import { Posts } from '.';

import { postsMock } from './mock';

const handlers = [
  rest.get('*segware-book-api.segware.io/api*', async (req, res, context) => {
    return res(
      context.json(postsMock)
    );
  }),
];

const server = setupServer(...handlers);

describe('<Posts />', () => {
  beforeAll(() => server.listen());

  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());

  it('should load more posts', async () => {
    render(<Posts />);

    const loader = screen.getByTestId('loader');

    await waitForElementToBeRemoved(loader);

    expect(screen.getByRole('button', { name: 'Carregar mais posts' }))
      .toHaveClass('load-more');
  });
});