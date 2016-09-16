define('bookstore-frontend/adapters/application', ['exports', 'ember-data'], function (exports, _emberData) {
  exports['default'] = _emberData['default'].JSONAPIAdapter.extend({
    host: 'http://jazz.caplinked.com/'
  });

  // export default DS.RESTAdapter.extend({
  //     host: 'http://jazz.caplinked.com'
  // });
});