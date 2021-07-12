'use strict';

module.exports = {
  color: true,
  diff: true,
  extension: ['ts'],
  parallel: false,
  spec: ['test/**/*.test.ts'],
  timeout: '60000',
  ui: 'bdd',
  require: "ts-node/register"
};