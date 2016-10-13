import Ember from 'ember';

export default Ember.Route.extend({
  session: Ember.inject.service('session'),

  setupController: function(controller, session) {
    controller.set('session', session);
  }
});
//
// // import Ember from 'ember';
// // import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
// //
// // const { inject: { service }, Route } = Ember;
// //
// // // export default Route.extend(ApplicationRouteMixin, {
// // //   sessionAccount: service('session-account')
// // // });
// //
// // export default Ember.Route.extend(ApplicationRouteMixin{
// //   session: Ember.inject.service('session'),
// //
// //   setupController: function(controller, session) {
// //     controller.set('session', session);
// //   }
// // });
