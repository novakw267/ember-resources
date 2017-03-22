import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save () {
      console.log("Don't forget to save your game!");
      this.sendAction('save', this.get('list'));
    }
  }
});
