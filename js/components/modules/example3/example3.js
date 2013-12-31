Proyect.Example3 = {};
(function(){
  "use strict";

  var idmodule = "#example3";
  var example3Model;
  var example3CollectionView;
  var example3MainView;
  var example3Collection;
  var myData;
  

  this.startModule= function( id ){
    myData = getData();
    instanceTemplate(); 
  };

  this.refreshModule = function (){
      myData = getData();
      example3Model.set(myData);
  };

  var getData = function () {
    return LITERALS.getModuleLiterals("example3");
  };


  var instanceTemplate = function(){
    example3Model = new Example3Model(myData);  
    example3MainView = new Example3MainView({model: example3Model});
    
  };

  var instanceCollection = function () {

    example3Collection = new Example3Collection();

    for (var x=0;x<myData.table.length;x++){
      example3Collection.add(myData.table[x]);
    }
   
    var example3ListView = new Example3CollectionView( { model: example3Collection});   
  };


/*********************************************************************************/
/* INSTANCE BACKBONE ELEMENTS MVC                                                */
/*********************************************************************************/

  //instance Model
  var Example3Model = Backbone.Model.extend({
    initialize: function(){
      console.info("Model! -> My Example3");
    },      
  });  

  //instance Collection
  var Example3Collection = Backbone.Collection.extend({      
      model:Example3Model,
      id:"example3"
  });


  //Collection View
  var Example3CollectionView = Backbone.View.extend({    
    el: "#example3",     
    initialize: function(){
      console.info("ListView! -> My Example3");
      this.render();
    },
    
    render:function () {      
      _.each(this.model.models, function (example3, num) {
            example3.set("id", "example3-"+ num )
            var vista_example3 = new Example3ItemView({model:example3});          
      },this);
    }

  }); 

  //Collection Item View
  var Example3ItemView = Backbone.View.extend({
    el: "#example3_item_list", 
    events: {},
    initialize: function(){      
      console.info("View! -> My Example3");      
      this.render();
    },

    render: function(){             
      var template = _.template($('#tpl_example3_item').html(),this.model);        
      this.$el.append(template);    
    }
  });

  //Main View Constructor
  var Example3MainView = Backbone.View.extend({    
    el: "#example3",     
      initialize: function(){      
          this.$hook  = $("#tpl_example3").html()
          this.render();
          this.listenTo(this.model, 'change', this.render);
      }, 

      render: function(){
          this.tpl = _.template(this.$hook, this.model.attributes)
          $("#example3").html(this.tpl);
          instanceCollection();
      }
  });  
  
  
}).apply( Proyect.Example3 );
