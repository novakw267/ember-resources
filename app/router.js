import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('lists');
  this.route('list', { path: '/lists/:list_id' }, function() {
      this.route('edit', { path: '/lists/:list_id/edit'});
  });

});

export default Router;
