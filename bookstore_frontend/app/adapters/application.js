import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://jazz.caplinked.com/'
});

// export default DS.RESTAdapter.extend({
//     host: 'http://jazz.caplinked.com'
// });
