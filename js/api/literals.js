LITERALS = {};
(function(){
  "use strict";

  var data = {}; 

  this.load = function () {
    data = LITERALDATA;
  };

  this.getModuleLiterals = function (key) {
    var lang = Proyect.CONFIG.app.default_language;
    return data[lang].modules[key];
  };

  this.getButtonLiteral = function (key) {
    var lang = Proyect.CONFIG.app.default_language;
    return data[lang].buttons[key];
  };
  
  this.getMainMenuOptions = function () {
    var lang = Proyect.CONFIG.app.default_language;
    return data[lang].mainMenu.options;
  };

  this.getActualLanguage = function (key) {
    var lang = Proyect.CONFIG.app.default_language;
    return data[lang].languages;
  };

  this.setLanguageLiteralsInMainMenu = function () {
    var languages = LITERALS.getActualLanguage();
    $(".language").each(function(index){
        $(this).html(languages[index].language);
    });
  };

  this.bindLanguageOptions = function (){
	 	
	 	var language = Proyect.CONFIG.app.default_language;

		$("#menuContainer .btn-group .btn").each(function(){
			if($(this).attr("value")===language){
				$(this).addClass("active")
			}
		})
		
    $(".language").off();
		$(".language").on("click", function (e){
			e.preventDefault();
			if(!$(this).hasClass("active")){
				$("#menuContainer .btn").toggleClass("active");
				$("#sidebar-wrapper").toggleClass("active");
				Proyect.CONFIG.app.default_language = $(this).attr("value");
        App.actualModule.refreshModule();
			}
		});
  };
}).apply( LITERALS );

LITERALS.load();

