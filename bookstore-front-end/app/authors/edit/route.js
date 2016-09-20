import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    return this.store.findRecord('author', params.author_id);
  },
  
  actions: {
    updateAuthor: function(model) {
      var _this = this;
      model.save().then(function(author){
        _this.transitionTo('authors.author', author);
      });
    } 
  }
});
