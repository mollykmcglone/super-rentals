import Ember from 'ember';

var announcements = [{
  id: 1,
  name: "Bob",
  message: "Don't feed the skunks"
}];

export default Ember.Route.extend({
  model() {
    return announcements;
  },
});
