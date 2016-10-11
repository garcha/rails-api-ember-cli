import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),
  model: function() {
    return Ember.Object.create({ identification: '', password: ''});
  },

  setupController: function(controller, model) {
    controller.set('credentials', model);
  },

  actions:{
    authenticate: function(credentials) {
      console.log(credentials);
      this.get('session').authenticate('authenticator:jwt', credentials);
    }
  }
});
