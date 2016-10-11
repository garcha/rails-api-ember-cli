define('bookstore-frontend/login/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    // model: function() {
    //   return Ember.Object.create({ identification: '', password: ''});
    // },

    setupController: function setupController(controller, model) {
      controller.set('credentials', model);
    },

    actions: {
      // authenticate: function(credentials) {
      //   this.get('session').authenticate('authenticator:jwt', credentials);
      // }
      //
      authenticate: function authenticate() {
        var credentials = this.getProperties('identification', 'password'),
            authenticator = 'authenticator:jwt';

        this.get('session').authenticate(authenticator, credentials);
      }
    }
  });
});