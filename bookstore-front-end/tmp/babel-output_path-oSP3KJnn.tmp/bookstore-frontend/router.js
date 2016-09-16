define('bookstore-frontend/router', ['exports', 'ember', 'bookstore-frontend/config/environment'], function (exports, _ember, _bookstoreFrontendConfigEnvironment) {

  var Router = _ember['default'].Router.extend({
    location: _bookstoreFrontendConfigEnvironment['default'].locationType,
    rootURL: _bookstoreFrontendConfigEnvironment['default'].rootURL
  });

  Router.map(function () {
    this.route('books');
    this.route('authors', function () {

      this.route('author', { path: '/:id' }, function () {
        this.route('books', { path: '/books' });
        this.route('edit', { path: '/edit' });
      });
    });
    this.route('publishers');

    this.route('template', function () {});
    this.route('about');
    this.route('contact');
  });

  // export default Router.map(function() {
  //     this.route('author', { path: "authors" }, function() {
  //         this.route('list', { path: "list" });
  //         this.route('show', { path: ":id" });
  //     });
  // });

  exports['default'] = Router;
});