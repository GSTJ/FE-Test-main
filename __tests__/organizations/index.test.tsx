import React from 'react';

import {fireEvent, render} from '@testing-library/react-native';
import Organizations from '../../app/screens/organizations';
import mockOrganizations from '../../__mocks__/organizations';
import {ScreenNames} from '../../app/types/reactNavigation';
import {
  mockAxiosResultOnce,
  mockAxiosResult,
} from '../../app/services/testUtils';

const mockNavigate = jest.fn();
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
    navigate: mockNavigate,
  }),
}));

describe('Organizations screen', () => {
  describe('handle request status feedback', () => {
    it('renders loading state', () => {
      mockAxiosResultOnce({data: null, loading: true, error: false});

      const component = render(<Organizations />);

      expect(component.getByTestId('activity-indicator')).toBeTruthy();
      expect(component).toMatchSnapshot();
    });

    it('renders error state', () => {
      mockAxiosResultOnce({data: null, loading: false, error: true});

      const component = render(<Organizations />);

      expect(component.getByTestId('error-message')).toBeTruthy();
      expect(component).toMatchSnapshot();
    });

    it('renders loading state with priority', () => {
      mockAxiosResultOnce({data: null, loading: true, error: true});

      const component = render(<Organizations />);

      expect(component.queryByTestId('error-message')).toBeFalsy();
      expect(component.queryByTestId('activity-indicator')).toBeTruthy();
    });
  });

  it('renders empty organizations list state', () => {
    mockAxiosResultOnce({data: [], loading: false, error: false});

    const component = render(<Organizations />);

    expect(component.queryByTestId('empty-message')).toBeTruthy();
    expect(component).toMatchSnapshot();
  });

  describe('handle request sucess', () => {
    beforeAll(() => {
      mockAxiosResult({data: mockOrganizations, loading: false, error: false});
    });

    it('matches snapshot', () => {
      const component = render(<Organizations />);
      expect(component).toMatchSnapshot();
    });
    it('renders all organizations', () => {
      const component = render(<Organizations />);

      expect(
        component.getAllByTestId(/organization-list-item-.*/),
      ).toHaveLength(mockOrganizations.length);
    });

    it('should navigate to organization page when an organization is pressed', () => {
      const component = render(<Organizations />);

      const firstOrg = mockOrganizations[0];

      const firstOrgComponent = component.getByTestId(
        `organization-list-item-${mockOrganizations[0].ein}`,
      );

      fireEvent.press(firstOrgComponent);

      expect(mockNavigate).toHaveBeenCalledWith(
        ScreenNames.Organization,
        firstOrg,
      );
    });

    describe('search organizations by name', () => {
      it('should be able to search case insensitively', () => {
        const component = render(<Organizations />);

        const searchInput = component.getByTestId('organizations-searchbar');

        fireEvent.changeText(
          searchInput,
          mockOrganizations[0].name.toUpperCase(),
        );
        expect(
          component.getAllByTestId(/organization-list-item-.*/),
        ).toHaveLength(1);

        fireEvent.changeText(
          searchInput,
          mockOrganizations[0].name.toLowerCase(),
        );
        expect(
          component.getAllByTestId(/organization-list-item-.*/),
        ).toHaveLength(1);
      });

      it('should be able to generically search organizations', () => {
        const component = render(<Organizations />);

        const searchInput = component.getByTestId('organizations-searchbar');

        fireEvent.changeText(searchInput, 'rescue');
        expect(
          component.getAllByTestId(/organization-list-item-.*/),
        ).toHaveLength(2);

        fireEvent.changeText(searchInput, '');
        expect(
          component.getAllByTestId(/organization-list-item-.*/),
        ).toHaveLength(mockOrganizations.length);
      });
    });
  });
});
