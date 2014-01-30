App = Ember.Application.create();

App.Router.map(function() {
  this.route('dropkick');
  this.route('thumper');
});

App.IndexRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON("https://api.github.com/users/Robdel12").then(function(data) {
      return data;
    });
  }
});

App.DropkickRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON("https://api.github.com/repos/Robdel12/Dropkick").then(function(data) {
      return data;
    });
  }
});

App.ThumperRoute = Ember.Route.extend({
  model: function() {
    return Ember.$.getJSON("https://api.github.com/repos/Robdel12/Thumper").then(function(data) {
      return data;
    });
  }
});
