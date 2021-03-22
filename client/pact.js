// ./pact/publish.js
const { Publisher } = require('@pact-foundation/pact');
const packageJson = require('./package.json');
const path = require('path');
const opts = {
  pactFilesOrDirs: [path.resolve(process.cwd(), 'pact/pacts')],
  pactBroker: process.env.TODO_PACT_BROKER,
  pactBrokerToken: process.env.TODO_PACT_BROKER_TOKEN,
  consumerVersion: packageJson.version,
};

new Publisher(opts)
  .publishPacts()
  .then(() => console.log('Pacts successfully published'));
