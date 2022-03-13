import {IOrganization} from '../screens/organizations';

export enum ScreenNames {
  Organizations = 'Organizations',
  Organization = 'Organization',
}

export type RootStackParamList = {
  [ScreenNames.Organization]: IOrganization;
  [ScreenNames.Organizations]: undefined;
};
