import Ember from 'ember';

export default Ember.Component.extend({
  buttonLabel: function() {
    return (this.get('author').id) ? 'Update Author' : 'Add Author';
  }.property(),
  
  actions: {
    submit: function() {
      this.sendAction('action', this.get('author'));
    }
  }
});