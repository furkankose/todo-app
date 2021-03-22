const { Verifier } = require('@pact-foundation/pact');

const opts = {
  provider: 'TodoProvider',
  providerBaseUrl: 'http://localhost:3000',
  pactBrokerUrl: process.env.TODO_PACT_BROKER,
  pactBrokerToken: process.env.TODO_PACT_BROKER_TOKEN,
  publishVerificationResult: true,
  providerVersion: '0.1.0',
};

new Verifier(opts).verifyProvider().then(() => {
  console.log('Pact verified successfully');
});
