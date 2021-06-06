import { render, screen } from '@testing-library/react';

import { Post } from '.';
import { postPropsMock } from './mock';

const props = postPropsMock;

describe('<Post />', () => {
  it('should render Post correctly', () => {
    const regexp = new RegExp(`${props.likes.count}|${props.loves.count}`);

    render(<Post {...props} />);

    expect(screen.getByText(props.createdAt, { selector: 'time' })).toBeInTheDocument();
    expect(screen.getByText(props.content, { selector: 'p' })).toBeInTheDocument();
    expect(screen.getByText(props.author, { selector: 'p' })).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: regexp })).toHaveLength(2);
  });

  it('should match snapshot', () => {
    const { container } = render(<Post {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});