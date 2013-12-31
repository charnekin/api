Proyect.Home = {};
(function(){
  "use strict";

  var idmodule = "#home";

  this.startModule = function(){
      renderHome();
  };

  this.refreshModule = function (){
      this.startModule();
  };

  var renderHome = function () {
      var homeLiterals = LITERALS.getModuleLiterals("home");
      var homeTpl = _.template($("#tpl_home").html(), homeLiterals)
      $(idmodule).html(homeTpl);
  };

}).apply( Proyect.Home );
