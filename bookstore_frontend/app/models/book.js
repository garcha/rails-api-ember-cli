import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  price: DS.attr('number'),
  author: DS.belongsTo('author', { async: true }),
  publisher: DS.belongsTo('publisher', { async: true })
});
