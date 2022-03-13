import {init} from 'detox';

const config = require('../package.json').detox;

jest.setTimeout(120000);

beforeAll(async () => {
  await init(config, {initGlobals: false});
});
