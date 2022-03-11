import {makeOrganizationMock} from './organization';

export default [
  makeOrganizationMock({type: 'Animal', name: 'Animal Shelter', ein: '1'}),
  makeOrganizationMock({type: 'Animal', name: 'Animal Rescue', ein: '2'}),
  makeOrganizationMock({type: 'Sport', name: 'Soccer Club', ein: '3'}),
  makeOrganizationMock({type: 'Sport', name: 'Basketball Club', ein: '4'}),
  makeOrganizationMock({type: 'Marine', name: 'Marine Rescue', ein: '5'}),
];
