Proyect.ROUTER = Backbone.Router.extend({

	routes: {
		"home": "home",
		"about": "about",
		'example1': 'example1',
		'example2': 'example2',
		'example3': 'example3'
	},

	home: function() {
		App.loadModule("home");
	},
	about: function() {
		App.loadModule("about");
	},
	example1: function() {
		App.loadModule("example1");
	},
	example2: function() {
		App.loadModule("example2");
	},
	example3: function() {
		App.loadModule("example3");
	}

});

Backbone.history.start();
var backboneRouter = new Proyect.ROUTER;