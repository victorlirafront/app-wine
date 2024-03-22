import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../../App';

test('Button text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText('Iniciar um ciclo');
  expect(textElement).toBeDefined();
});
