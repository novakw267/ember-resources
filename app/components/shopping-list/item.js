import Ember from 'ember';

export default Ember.Component.extend({
  tagName: 'li',
  classNameBindings: ['listItemCompleted'],
  listItemCompleted: Ember.computed.alias('item.done'),
  actions: {
    toggleDone () {
      return this.sendAction('toggleDone', this.get('item'));
    },
    deleteItem () {
      console.log('maybe?');
      return this.sendAction('delete', this.get('item'));
    },
  },

  // template: '{{foo item=item }}',
  // item: item,
});
