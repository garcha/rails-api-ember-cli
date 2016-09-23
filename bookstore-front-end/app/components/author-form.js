import Ember from 'ember';
import DS from 'ember-data';
import Validator from 'npm:validator';

export default Ember.Component.extend({
  // errors: DS.Errors.create(),
  
  buttonLabel: function() {
    return (this.get('author').id) ? 'Update Author' : 'Add Author';
  }.property(),
  
  actions: {
    submit: function() {
      if (this.validate()) {
        this.sendAction('action', this.get('author'));
      }
    }
  },
  
  validate: function() {
    this.set('errors', DS.Errors.create());
    
    if (Validator.isNull(this.get('author.name'))) {
      this.get('errors').add('name', "Name can't be empty");
    }
    // if (!Validator.isEmail(this.get('author.name'))){
    //   this.get('errors').add('name', "Name is not valid email");
    // }
    
    return this.get('errors.isEmpty');
  }
  
  
});