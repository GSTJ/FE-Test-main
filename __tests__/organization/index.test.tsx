import React from 'react';

import {render} from '@testing-library/react-native';
import Organization from '../../app/screens/organization';
import {makeOrganizationMock} from '../../__mocks__/organization';

const mockParams = makeOrganizationMock();

jest.mock('@react-navigation/native', () => ({
  useRoute: () => ({params: mockParams}),
  useNavigation: () => ({
    goBack: jest.fn(),
  }),
}));

describe('Organization screen', () => {
  it('matches snapshot', () => {
    const component = render(<Organization />);
    expect(component).toMatchSnapshot();
  });

  it('renders correct description', () => {
    const component = render(<Organization />);

    expect(component.getByText(mockParams.description)).toBeTruthy();
  });

  it('renders correct category', () => {
    const component = render(<Organization />);

    expect(component.getByText(mockParams.type)).toBeTruthy();
  });

  it('renders correct company logo', () => {
    const component = render(<Organization />);

    const organizationLogo = component.getByTestId('organization-logo');

    expect(organizationLogo.props.source.uri).toBe(mockParams.uri);
  });
});
