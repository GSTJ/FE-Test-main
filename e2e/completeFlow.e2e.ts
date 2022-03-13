import axios from 'axios';
import {by, device, expect, element} from 'detox';

// In a real-world scenario, this would be stored in a secure location, like an environment variable
const testCredentials = {
  username: 'test@groundswell.io',
  password: 'Temp1234!',
};

let organizations = [];

describe('Complete flow', () => {
  beforeAll(async () => {
    await device.launchApp();

    const response = await axios.get('https://gs.npkn.net/npo');
    organizations = response.data;
  });

  // Not trying to test the whole application, but the login is needed to get to the next screens
  describe('Login screen', () => {
    it('should be at the login screen', async () => {
      await expect(element(by.id('login-screen'))).toBeVisible();
    });

    it('should login with fake credentials', async () => {
      await element(by.id('username-input')).typeText(testCredentials.username);
      await element(by.id('password-input')).typeText(testCredentials.password);

      await element(by.id('login-button')).tap();

      await expect(element(by.id('error-box'))).not.toBeVisible();
    });
  });

  it('should enter organizations screen', async () => {
    await element(by.id('organizations-tab-bar')).tap();
  });

  describe('Organizations screen', () => {
    it('should be at the organizations screen', async () => {
      await expect(element(by.id('organizations-screen'))).toBeVisible();
    });

    it('should display all organizations', async () => {
      for (const organization of organizations) {
        await expect(
          element(by.id(`organization-list-item-${organization.ein}`)),
        ).toExist();
      }
    });

    describe('Search organizations by name', () => {
      afterEach(async () => {
        const searchInput = element(by.id('organizations-searchbar'));
        await searchInput.clearText();
      });

      it('should be able to search case insensitively', async () => {
        const searchInput = element(by.id('organizations-searchbar'));

        await searchInput.typeText(organizations[0].name.toUpperCase());
        await expect(
          element(by.id(`organization-list-item-${organizations[0].ein}`)),
        ).toExist();
        await expect(
          element(by.id(`organization-list-item-${organizations[1].ein}`)),
        ).not.toExist();

        await searchInput.clearText();

        await searchInput.typeText(organizations[0].name.toLowerCase());
        await expect(
          element(by.id(`organization-list-item-${organizations[0].ein}`)),
        ).toExist();
        await expect(
          element(by.id(`organization-list-item-${organizations[1].ein}`)),
        ).not.toExist();
      });

      it('should be able to generically search organizations', async () => {
        const searchInput = element(by.id('organizations-searchbar'));

        const genericText = 'steamboat';

        const expectedSearchResult = organizations.filter(organization => {
          return organization.name
            .toLowerCase()
            .includes(genericText.toLowerCase());
        });

        const unexpectedSearchResult = organizations.filter(organization => {
          return !organization.name
            .toLowerCase()
            .includes(genericText.toLowerCase());
        });

        await searchInput.typeText(genericText);

        for (const expectedOrganization of expectedSearchResult) {
          await expect(
            element(
              by.id(`organization-list-item-${expectedOrganization.ein}`),
            ),
          ).toExist();
        }

        for (const unexpectedOrganization of unexpectedSearchResult) {
          await expect(
            element(
              by.id(`organization-list-item-${unexpectedOrganization.ein}`),
            ),
          ).not.toExist();
        }
      });

      it('should correctly show empty message when no organization is found', async () => {
        const searchInput = element(by.id('organizations-searchbar'));

        await searchInput.typeText('fake-name-that-should-not-exist');

        await expect(element(by.id('organizations-searchbar'))).toExist(); // Shouldn't disappear after an invalid search
        await expect(element(by.id('empty-message'))).toExist();
      });
    });
  });

  it('should navigate to organization page when an organization is pressed', async () => {
    await element(
      by.id(`organization-list-item-${organizations[0].ein}`),
    ).tap();
  });

  describe('Organization screen', () => {
    it('should be at the organization screen', async () => {
      await expect(element(by.id('organization-screen'))).toBeVisible();
    });

    it('renders correct name', async () => {
      await expect(element(by.text(organizations[0].name))).toBeVisible();
    });

    it('renders correct description', async () => {
      await expect(
        element(by.text(organizations[0].description)),
      ).toBeVisible();
    });

    it('renders correct category', async () => {
      await expect(element(by.text(organizations[0].type))).toBeVisible();
    });
  });

  it('should navigate back to the organizations screen when back is pressed', async () => {
    await element(by.id('navigation-back-button')).tap();
    await expect(element(by.id('organizations-screen'))).toBeVisible();
  });
});
