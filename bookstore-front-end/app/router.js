import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('books');
  this.route('publishers');
  this.route('authors', function() {
    this.route('author', { path: ':author_id' });
    this.route('edit', { path: ':author_id/edit' });
    this.route('new');
  });
});

export default Router;
