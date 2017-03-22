import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('list', params.list_id);
  },
  actions: {
    toggleItemDone(item) {
      item.toggleProperty('done');
      item.save();
    },
    deleteItem (item) {
      item.destroyRecord();
    },
    createItem (data) {
      console.log('route!!!!');
      let item = this.get('store').createRecord('item', data);
      item.save();
    },
  }
});
