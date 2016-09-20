import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return { name: ''};
  },
  
  setupController: function(controller, model) {
    controller.set('author', model);
  },

  // actions: {
  //   createAuthor(params) {
  //     this.store.createRecord('author', {
  //       name: params.name
  //     }).save();
  //   }
  // }
  
  actions: {
    createAuthor: function(author){
      //console.log(author);
      var _this = this;
      this.store.createRecord('author', author).save().then(function(author){
        _this.transitionTo('authors.author', author);
      });
    }
  }
});
