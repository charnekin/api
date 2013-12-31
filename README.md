api
===

JS API for cordova apps

****************************************************************************************
  General Description
****************************************************************************************

This repository is a basic estructure for build a modular app with cordova/phonegap. 
This generic Api have the porpouse to start code apps faster, all libraries are minified so don't be concern about size.

It includes a special boostrap themed slide menu for mobile so don't worry about responsive. 

Ready for multilanguage with real-time change.

It had included:
- Boostrap
- Require
- Jquery
- Backbone / Underscore

Online demo at:
http://yopo.es/cordovapi/




****************************************************************************************
  STARTING WITH API
****************************************************************************************
1. Download the code and put in you /www cordova proyect. 
2. Compile

Easy? (^_^)


****************************************************************************************
  STRUCTURE INFO
****************************************************************************************

/css --> all style stuff. I recommend to point your LESS/SASS out in proyect.css file.
/css/menu_type1_resources --> this folder contains the resources for slider main menu. 
                              It's in independent folder for easy remove if don't want a main menu.

/dummys --> JSON data files for test before integration. (not avaiable yet)

/js/main.js --> requiere config and requiere loads all js dependencies of the proyect.

/js/api --> Generic api
/js/components --> Specific components of proyect 
/js/components/modules --> pages/modules of proyect (3 different examples for copy/paste)
/js/libs --> Third libraries

****************************************************************************************
  HOW TO
****************************************************************************************

------- Create a new module/page
      1. add the new module in /js/components/proyect_router.js (backbone router)
      2. copy/paste a example folder with your favourite flavour
      3. search and replace folder/files/vars with the name given in step 1
      4. if don't get ajax remote data add literals in /js/components/proyect_literals.js 
                                                                      (remember do it for each language)
      5. parse and customize your new_module.html as you want ;)
      6. add your js magic code in your new_module.js

------- Add new third library
      1. do new folder in /js/libs/ and copy whatever.js
      2. add library in /js/main.js (remember especify dependencies in shim: if have someone)

------- Set default language
      1. set language id desired in /js/components/proyect_config.js --> default_language var

------- Do not show MainMenu
      1. set main_menu to false in /js/components/proyect_config.js
      
------- Set another init module 
      1. set desired module id in /js/components/proyect_config.js --> startModule var
      
------- Add another language
      1. clone json language entry in /js/components/proyect_literals
      2. add new language in each "languages":  array
      3. add a button with id language value in /js/components/modules/main_menu.html
      
------- Add/Customize main menu
      1. html changes: /js/components/modules/main_menu.html
      2. functionality changes: /js/components/api/menu.js
      
(soon configurable enviroment url too)


****************************************************************************************
  API METHODS
****************************************************************************************
/js/api/app.js
    
    --- App.loadModule("idmodule")
        load module dependencies and append html at #pageContainer, after starts js of module --> startModule() 

/js/api/literals.js

    --- LITERALS.getModuleLiterals("idmodule")
            returns js object with all module literals of the active language
            
    --- LITERALS.getButtonLiteral("key")
            returns string with button literal of the active language
            
    --- LITERALS.getMainMenuOptions("key")
            returns js object with all menu options literals of the active language
            
    --- LITERALS.getActualLanguage()
            returns string with id of selected language
    
    --- LITERALS.setLanguageLiteralsInMainMenu()
            insert literals of languages in main menu
        
  
/js/api/menu.js
    
    --- LITERALS.close()
            close main menú
            

****************************************************************************************
  IN THE NEXT UPDATE SOON
****************************************************************************************
- Mobile class for control cordova load and usefull methods for handle terminal type / OS preferences
- PHP Json Dispatcher for dummies (for server emulate)
- JSON class for easiest ajax control
- JSON class for handle errors
- PopUp class for easiest popups launch
- Tablet class to add exclusive functionality for tablets





    


