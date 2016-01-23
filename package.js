Package.describe({
  summary: 'Manage application UI state using Flux patterns specific to Meteor',
  name: 'space:flux',
  version: '0.7.0',
  git: 'https://github.com/meteor-space/flux.git'
});

Package.onUse(function(api) {

  api.versionsFrom('1.2.0.1');

  api.use([
    'underscore',
    'ecmascript',
    'space:base@4.0.0',
    'space:messaging@3.0.0',
    'space:ui@6.0.0'
  ]);

  api.addFiles([
    'source/module.js',
    'source/automation.js',
    'source/store.js'
  ], 'client');

});

Package.onTest(function(api) {

  api.use([
    'ecmascript',
    'space:flux',
    'practicalmeteor:munit@2.1.5',
    'space:base@4.0.0',
    'space:ui@6.0.0',
    'space:testing@3.0.1',
    'space:testing-flux@0.7.0'
  ]);

  api.addFiles([
    'tests/store.tests.js'
  ], 'client');

});
