const { cdk } = require('projen');
const project = new cdk.JsiiProject({
  name: 'wing-sdk',
  author: 'Monada, Inc.',
  authorOrganization: true,
  authorAddress: 'ping@monada.co',
  repository: 'https://github.com/monadahq/wing-sdk.git',
  defaultReleaseBranch: 'main',
  minNodeVersion: '18.4.0',
  peerDeps: ['constructs@^10'],
  jestOptions: {
    jestVersion: '^27.0.0', // 28 requires a later typescript version
  },
  npmRegistryUrl: 'https://npm.pkg.github.com',
});

project.synth();