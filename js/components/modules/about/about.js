Proyect.About = {};
(function(){
  "use strict";

  var idmodule = "#about";

  this.startModule = function(){
      renderAbout();
  };

  this.refreshModule = function (){
      this.startModule();
  };

  var renderAbout = function () {
      var aboutLiterals = LITERALS.getModuleLiterals("about");
      var aboutTpl = _.template($("#tpl_about").html(), aboutLiterals)
      $(idmodule).html(aboutTpl);
  };

}).apply( Proyect.About );
