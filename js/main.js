require.config({
    baseUrl: 'js',
    paths: {
        cordova: '../cordova',
    	jquery: 'libs/jquery/jquery-2.0.3.min',
        underscore: 'libs/underscore/underscore-min',
        backbone: 'libs/backbone/backbone-min',
        bootstrap: 'libs/bootstrap/bootstrap',
        bootstrap_dropdown: 'libs/bootstrap/dropdown',
        text: 'libs/require/text',

		proyectRouter: 'components/proyect_router',
        proyectConfiguration: 'components/proyect_config',
        proyectLiteralsData: 'components/proyect_literals',
        
        app: 'api/app',
        literals: 'api/literals',
        mainmenu: 'api/menu',
        mobile: 'api/mobile'
    },

    shim: {
        'backbone': ['underscore','jquery'],
        'bootstrap': ['jquery'],
        'proyectRouter': ['backbone'],
        'literals': ['proyectLiteralsData'],
        'app': ['proyectRouter','proyectConfiguration','literals','mainmenu'],
        'mobile': ['cordova']
    }
});

requirejs([
	'backbone',
    'text',
    'proyectConfiguration',
    'proyectRouter',
    'app'
], function() {
    App.startApp();
});