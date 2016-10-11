define('bookstore-frontend/authors/edit/route', ['exports', 'ember', 'ember-data', 'bookstore-frontend/utils/server-errors-parser'], function (exports, _ember, _emberData, _bookstoreFrontendUtilsServerErrorsParser) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findRecord('author', params.author_id);
    },

    setupController: function setupController(controller, model) {
      controller.set('author', model);
      controller.set('errors', _emberData['default'].Errors.create());
    },

    actions: {
      updateAuthor: function updateAuthor(author) {
        var _this = this;
        var errors = _this.controllerFor('authors.edit').get('errors');
        author.save().then(function (author) {
          _this.transitionTo('authors.author', author);
        })['catch'](function (resp) {
          (0, _bookstoreFrontendUtilsServerErrorsParser['default'])(resp, errors);
        });
      }
    }
  });
});