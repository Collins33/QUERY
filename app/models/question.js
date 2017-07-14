import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  topic: DS.attr(),
  query: DS.attr(),
  image: DS.attr(),
});
