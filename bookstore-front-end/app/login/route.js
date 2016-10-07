import Ember from 'ember';

export default Ember.Route.extend({
  // model: function() {
  //   return Ember.Object.create({ identification: '', password: ''});
  // },

  setupController: function(controller, model) {
    controller.set('credentials', model);
  },

  actions:{
    // authenticate: function(credentials) {
    //   this.get('session').authenticate('authenticator:jwt', credentials);
    // }
    // 
    authenticate: function() {
      var credentials = this.getProperties('identification', 'password'),
        authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials);
    }
  }
});
