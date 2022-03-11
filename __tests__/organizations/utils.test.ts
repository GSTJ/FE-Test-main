import {
  makeSearchByProperty,
  makeSectionByProperty,
} from '../../app/screens/organizations/utils';
import mockOrganizations from '../../__mocks__/organizations';

describe('Utils', () => {
  describe('makeSectionByProperty', () => {
    it('should be able to group organizations by type', () => {
      const sections = mockOrganizations.reduce(
        makeSectionByProperty('type'),
        [],
      );

      expect(sections).toStrictEqual([
        {title: 'Animal', data: [mockOrganizations[0], mockOrganizations[1]]},
        {title: 'Sport', data: [mockOrganizations[2], mockOrganizations[3]]},
        {title: 'Marine', data: [mockOrganizations[4]]},
      ]);
    });
  });

  describe('makeSearchByProperty', () => {
    it('should be able search by property', () => {
      const searchResult = mockOrganizations.filter(
        makeSearchByProperty('name', 'rescue'),
      );
      expect(searchResult).toHaveLength(2);
    });

    it('should search case insensitive', () => {
      const lowerCaseSearch = mockOrganizations.filter(
        makeSearchByProperty('name', mockOrganizations[0].name.toLowerCase()),
      );
      expect(lowerCaseSearch).toHaveLength(1);

      const upperCaseSearch = mockOrganizations.filter(
        makeSearchByProperty('name', mockOrganizations[0].name.toUpperCase()),
      );
      expect(upperCaseSearch).toHaveLength(1);
    });

    it('should return everything when searchQuery is empty', () => {
      const searchResult = mockOrganizations.filter(
        makeSearchByProperty('name', ''),
      );
      expect(searchResult).toHaveLength(mockOrganizations.length);
    });
  });
});
