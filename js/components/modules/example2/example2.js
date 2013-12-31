Proyect.Example2 = {};
(function(){
  "use strict";  
  
  var idmodule = "#example2";
  var example2Model;
  var example2View;
  var myData;

/**
  * @method startModule
  * @desc control first load of class
  * @returns  {void}
  * @memberof Proyect.Example2
**/
  this.startModule= function( id ){
    myData = getData();
    instanceTemplate();  
  };

  var getData = function () {
    return LITERALS.getModuleLiterals("example2");
  };

  this.refreshModule = function (){
      myData = getData();
      example2Model.set(myData);
  };

  var instanceTemplate = function (){
      example2Model = new Example2Model(myData);    
      example2View = new Example2View({model: example2Model});
  };

  /*********************************************************************************/
  /* INSTANCE BACKBONE ELEMENTS MVC                                                */
  /*********************************************************************************/

  //Model Constructor
  var Example2Model = Backbone.Model.extend();  

  //View Constructor
  var Example2View = Backbone.View.extend({    
    el: "#example2",     
      initialize: function(){      
          this.$hook  = $("#tpl_example2").html()
          this.render();
          this.listenTo(this.model, 'change', this.render);
      }, 

      render: function(){
          this.tpl = _.template(this.$hook, this.model.attributes)
          $("#example2").html(this.tpl);
      }
  });  

}).apply( Proyect.Example2 );
