// __tests__/CheckboxWithLabel-test.js

import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import SearchForm from './SearchForm';

configure({adapter: new Adapter()});
describe('Test SearchForm component', () => {
let wrapper;
  it('Test click on button', () => {
    const button = shallow((<SearchForm />));
    const form = wrapper.find('.search-form').at(0);
    form.simulate('submit');
    const validationError = screen.getByText(/Please/i);
    expect(validationError).toBeInTheDocument();
  });
});


import { render, screen } from '@testing-library/react';

test('renders Search Button', () => {
  render(<SearchForm />);
  const linkElement = screen.getByText(/Search/i);
  expect(linkElement).toBeInTheDocument();
});
