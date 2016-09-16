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
    this.route('author', { path: '/:id' }, function() {
      this.route('books', { path: '/books'});
      this.route('edit', { path: '/edit' });
    });
  });
});

// export default Router.map(function() {
//     this.route('author', { path: "authors" }, function() {
//         this.route('list', { path: "list" });
//         this.route('show', { path: ":id" });
//     });
// });


export default Router;
