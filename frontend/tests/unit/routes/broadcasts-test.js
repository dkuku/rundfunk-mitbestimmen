import { moduleFor, test } from 'ember-qunit';

moduleFor('route:broadcasts', 'Unit | Route | broadcasts', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
  needs: [
    'service:metrics',
    'ember-metrics@metrics-adapter:piwik', // bundled adapter
  ]
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});