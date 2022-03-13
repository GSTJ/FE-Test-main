import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';

import CustomNavigationBar from '../../app/components/customNavigationBar';

describe('Organization screen', () => {
  it('matches snapshot', () => {
    const component = render(
      <CustomNavigationBar
        navigation={{goBack: jest.fn()} as any}
        options={{title: 'Example'}}
      />,
    );

    expect(component).toMatchSnapshot();
  });

  describe('Back actions', () => {
    it('renders back icon correctly', () => {
      const component = render(
        <CustomNavigationBar
          navigation={{goBack: jest.fn()} as any}
          back={{title: 'Previous'}}
          options={{title: 'Example'}}
        />,
      );

      expect(component).toMatchSnapshot();
    });

    it('returns to previous page when pressed', () => {
      const goBack = jest.fn();

      const component = render(
        <CustomNavigationBar
          navigation={{goBack} as any}
          back={{title: 'Previous'}}
          options={{title: 'Example'}}
        />,
      );

      fireEvent.press(component.getByTestId('navigation-back-button'));

      expect(goBack).toHaveBeenCalled();
    });
  });
});
