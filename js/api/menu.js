MainMenu = {};
(function(){
  "use strict";

  this.load = function(){

    require([
       'text!components/modules/main_menu.html'
    ], function (HTML) {
        $('#menuContainer').html(HTML);
        MainMenu.setMenuLiterals();
        bindMenuAnimations();
        LITERALS.setLanguageLiteralsInMainMenu();
        LITERALS.bindLanguageOptions();
    });
  };

  this.close = function () {
      $("#sidebar-wrapper").removeClass("active");
  };

  this.setMenuLiterals = function () {
      var opts = LITERALS.getMainMenuOptions();
      $(".option").each(function(index){
          $(this).html(opts[index].option);
      });
  };

  var bindMenuAnimations = function (){
      $("#menu-close").click(function(e) {
          e.preventDefault();
          $("#sidebar-wrapper").toggleClass("active");
      });        
      $("#menu-toggle").click(function(e) {
          e.preventDefault();
          $("#sidebar-wrapper").toggleClass("active");
      });
  };

}).apply( MainMenu );


