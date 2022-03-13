import type {IOrganization} from '../app/screens/organizations';

export const makeOrganizationMock = ({
  name = 'My Non-Profit',
  uri = 'https://www.example.com/logo.png',
  ein = '123456789',
  type = 'Pet',
  description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
} = {}): IOrganization => ({
  name,
  uri,
  ein,
  type,
  description,
});
