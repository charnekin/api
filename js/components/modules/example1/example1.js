Proyect.Example1 = {};
(function(){
  "use strict";

  var idmodule = "#example1";
  var myData;
      
  this.startModule = function(){
    myData = getData();
    instanceTemplate(); 
  };

  this.refreshModule = function (){
      this.startModule();
  };

  var getData = function () {
    return LITERALS.getModuleLiterals("example1");
  };

  var instanceTemplate = function () {
    setDataHeader();
    setContent();
    setButtons();
  };

  var setDataHeader = function () {
      var title = myData.example1_title;
      $( idmodule + " .page-header h1").html(title);
  };

  var setContent = function () {
      var desc1 = myData.example1_description1;
      var desc2 = myData.example1_description2;
      var desc3 = myData.example1_description3;

      var myContent = '<p>'+desc1+'</p><p>'+desc2+'</p><p>'+desc3+'</p>';
      
      $( idmodule + " .content").html(myContent);
  };

  var setButtons = function () {
      var prev = LITERALS.getButtonLiteral("prevButton");
      var next = LITERALS.getButtonLiteral("nextButton");

      $( idmodule + " .prevButton").html(prev);
      $( idmodule + " .nextButton").html(next);

  };
  
}).apply( Proyect.Example1 );

