App = {};
(function(){
  "use strict";

  this.actualModule;

  this.startApp = function(){
      App.loadMenu();
    	App.loadModule(Proyect.CONFIG.app.startModule);
  };

  this.loadMenu = function () {

    var appHaveMainMenu = Proyect.CONFIG.app.main_menu;

    if (appHaveMainMenu){
      require([
         'mainmenu'
      ], function () {
          MainMenu.load();
      });
    }
  };

  this.loadModule = function (idmodule) {

      var getDependencies = function () {
        require([
           'components/modules/' + idmodule + '/' + idmodule,
           'text!components/modules/' + idmodule + '/' + idmodule + '.html',
        ], function (moduleJS, HTML) {
            templateInyection(HTML);
            initializeModuleLogic();

            var appHaveMainMenu = Proyect.CONFIG.app.main_menu;
            if (appHaveMainMenu){
              MainMenu.close();
            }
        });
      };

      var initializeModuleLogic = function () {
          var moduleClassName = idmodule.charAt(0).toUpperCase() + idmodule.slice(1).toLowerCase();
          App.actualModule = Proyect[moduleClassName];
          Proyect[moduleClassName].startModule();
      };

      var templateInyection = function (template) {
          $('#pageContainer').html(template);
      };

      getDependencies();
    
  }; 
  
}).apply( App );


