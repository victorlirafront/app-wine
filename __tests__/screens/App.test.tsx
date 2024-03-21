import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../../App';

test('App contém o texto "Victor"', () => {
  const { getByText } = render(<App />);
  const textElement = getByText('Victor');
  expect(textElement).toBeDefined();
});
