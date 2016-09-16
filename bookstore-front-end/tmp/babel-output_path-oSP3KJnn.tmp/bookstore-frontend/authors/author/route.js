define('bookstore-frontend/authors/author/route', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({
    model: function model(params) {
      return this.get('store').findRecord('author', params.id);
    }
  });
});