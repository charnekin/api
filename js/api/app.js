App = {};
(function(){
  "use strict";

  this.actualModule;

  this.startApp = function(){
      cordovaLoadIfMobile();
      loadMenu();
    	App.loadModule(Proyect.CONFIG.app.startModule);
  };

 var loadMenu = function () {

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



  var cordovaLoadIfMobile = function () {

      var isMobile = function () {
         var protocol = location.protocol;
         if ( protocol.indexOf("http:") === 0 ){
            return false;
         }else{
            return true;
         }
      };

      if(isMobile()){
        require([
           'mobile'
        ], function () {
            Mobile.load();
        });
      }
  };
  
}).apply( App );


