import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    console.log();
    return this.get('store').findAll('list');
  },
  actions: {
    editList (list) {
      this.transitionTo('list.edit', list);
    }
  }
});
