import React from 'react';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

afterEach(cleanup);

describe('ContactForm component', () => {
  // baseline test
  it('renders', () => {
    render(<ContactForm />);
  });

  // snapshot test
  it('matches snapshot', () => {
    const { asFragment } = render(<ContactForm />);

    expect(asFragment()).toMatchSnapshot();
  });
})

describe('Content', () => {
  it('has h1 element', () => {
    const { getByTestId } = render(<ContactForm />)

    expect(getByTestId('h1')).toHaveTextContent('Contact me');
  })

  it('has Submit button', () => {
    const { getByTestId } = render(<ContactForm />)

    expect(getByTestId('submit')).toHaveTextContent('Submit');
  })
})
