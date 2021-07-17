import {render} from '@testing-library/react-native';
import React from 'react';
import WeatherCurrent from '../WeatherCurrent';

describe('WeatherCurrent', () => {
  test('Should render correctly', () => {
    const wrapper = render(<WeatherCurrent />);
    wrapper.getByTestId('weather-current');
  });

  test('Should avigate to Weather screen with location', () => {
    throw new Error('Text not implemented');
  });
});
