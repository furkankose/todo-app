// ./pact/publish.js
const { Publisher } = require('@pact-foundation/pact');
const path = require('path');
const opts = {
  pactFilesOrDirs: [path.resolve(process.cwd(), 'pact/pacts')],
  pactBroker: 'https://furkan.pactflow.io',
  pactBrokerToken: process.env.TODO_PACT_TOKEN,
  consumerVersion: '2.0.0',
};

new Publisher(opts)
  .publishPacts()
  .then(() => console.log('Pacts successfully published'));
