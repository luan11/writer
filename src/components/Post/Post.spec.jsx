import { render, screen } from '@testing-library/react';

import { Post } from '.';

describe('<Post />', () => {
  const postData = {
    id: 0,
    content: 'My content',
    createdAt: new Date().toLocaleDateString(),
    likes: {
      count: 0,
      reacted: false
    },
    loves: {
      count: 0,
      reacted: false
    },
    author: 'John Doe'
  };

  it('should render the post with the created at date', () => {
    render(<Post {...postData} />);

    expect.assertions(1);

    const content = screen.getByText(postData.createdAt, {
      selector: 'time'
    });

    expect(content).toBeInTheDocument();
  });

  it('should render the post with the content "My content"', () => {
    render(<Post {...postData} />);

    expect.assertions(1);

    const content = screen.getByText(postData.content, {
      selector: 'p'
    });

    expect(content).toBeInTheDocument();
  });

  it('should render the post with the author name "John Doe"', () => {
    render(<Post {...postData} />);

    expect.assertions(1);

    const content = screen.getByText(postData.author, {
      selector: 'p'
    });

    expect(content).toBeInTheDocument();
  });

  it('should render the post with the reaction buttons showing the count', () => {
    const regexp = new RegExp(`${postData.likes.count}|${postData.loves.count}`);

    render(<Post {...postData} />);

    expect.assertions(1);

    const content = screen.getAllByRole('button', {
      name: regexp
    });

    expect(content).not.toBeNull();
  });
});