LITERALDATA = {
    "en": {
        "languages": [
        		{
        			"language":"English"
        		},
        		{
        			"language":"Spanish"
        		}
        ],
        "mainMenu": {
        	options: [
        		{
        			"option":"About/Contact",
        		},
        		{
        			"option":"Example 1",
        		},
        		{
        			"option":"Example 2",
        		},
        		{
        			"option":"Example 3",
        		}
        	]
        },
        "buttons": {
            "prevButton": "Previous",
            "nextButton": "Next",
            "homeButton": "home",
        },
        "modules": {
            "home": {
                "home_title": "Home",
                "home_pane_title": "Modules Examples",
                "home_pane1": "Example with static literals data and manual render (no underscore)",
                "home_pane2": "Example with backbone single model and view",
                "home_pane3": "Example with backbone main view and a collection view inside",
                "home_desc1": "This home module are rendender with underscore but without bakbone models.",
                "home_button": "Next Example",
            },
            "about": {
                "about_title": "About/Contact",
                "about_desc1": "Complete guide and readme very soon...",
                "about_git": "github account",
                "about_twitter": "Questions and suggestions:",
                "about_email": "Or send me email to:",
                "about_button": "Back to Home",    
            },
            "example1": {
                "example1_title": "Module Example 1",
                "example1_description1": "This example load all data from static literals in /js/components/literals, in var Proyect.CONFIG.app.default_language you can change default language.",
                "example1_description2": "Class Proyect.LITERALS in /js/components/proyect_literals controls load and toggle languages",
                "example1_description3": "Example 1 do not use backbone, it's an example with manual render (non underscore use) for semi-static sections of the proyect"    
            },
            "example2" : {
                "title":"Rendered with backbone model/view",
                "description":"This module are render with backbone, TO DO a class JSON to manage ajax asyncronous loading data."
            },
             "example3":{
                "title":"Rendered with backbone main view and collection view",
                "description":"All this module/page is rendered with backbone main view that includes a iterate example collection.",
                "pane_title":"The iterate collection starts here:",
                "table":[
                    {
                        "data":"really",
                        "data2":"cool",
                        "data3":"stuff",
                        "data4":"with",
                        "data5":"backbone"
                    },
                    {
                        "data":"new",
                        "data2":"front",
                        "data3":"end",
                        "data4":"generation",
                        "data5":"tools"
                    },
                    {
                        "data":"think",
                        "data2":"get",
                        "data3":"a plan",
                        "data4":"and start",
                        "data5":"to code"
                    },
                    {
                        "data":"never",
                        "data2":"was",
                        "data3":"so",
                        "data4":"easy",
                        "data5":"develop"
                    },
                    {
                        "data":"great",
                        "data2":"power",
                        "data3":"becomes",
                        "data4":"great",
                        "data5":"responsability"
                    }
                ]
            }
        }
    },
    "es": {
        "languages": [
        		{
        			"language":"Inglés"
        		},
        		{
        			"language":"Español"
        		}
        ],
        "mainMenu": {
        	options: [
        		{
        			"option":"Acerca de / Contacto",
        		},
        		{
        			"option":"Ejemplo 1",
        		},
        		{
        			"option":"Ejemplo 2",
        		},
        		{
        			"option":"Ejemplo 3",
        		}
        	]
        },
        "buttons": {
            "prevButton": "Anterior",
            "nextButton": "Siguiente",
            "homeButton": "Inicio"
        },
        "modules": {
            "home": {
                "home_title": "Inicio",
                "home_pane_title": "Ejemplos de Módulos",
                "home_pane1": "Ejemplo con datos estáticos y render manual (sin underscore)",
                "home_pane2": "Ejemplo MVC backbone modelo-vista datos dinámicos",
                "home_pane3": "Ejemplo MVC backbone con una vista de colección insertada en una vista general",
                "home_desc1": "Este módulo está renderizado usando solo underscores y no backbone",
                "home_button": "Siguiente Ejemplo",    
            },
            "about": {
                "about_title": "Acerca de/Contacto",
                "about_desc1": "Muy pronto guía completa de manejo del API",
                "about_git": "cuenta github",
                "about_twitter": "Questions and suggestions:",
                "about_email": "O mandame un email a:",
                "about_button": "Volver a la home",    
            },
            "example1":{
                "example1_title": "Ejemplo Módulo 1",
                "example1_description1": "En este ejemplo se cargan todos los textos de los literales estaticos en /js/components/literals, en la variable Proyect.CONFIG.app.default_languaje en el /js/components/proyect_config.js se puede cambiar el idioma por defecto.",
                "example1_description2": "La clase Proyect.LITERALS en /js/components/proyect_literals controla las cargas y los cambios de idioma",
                "example1_description3": "Este ejemplo no usa backbone, es un ejemplo con render manual sin usar underscore."
            },
            "example2":{
                "title":"Renderizado con modelo/vista backbone",
                "description":"Este módulo está renderizado con backbone, Pronto se actualizará la api con una clase JSON para hacer peticiones ajax asincronas."
            },
            "example3":{
                "title":"Renderizado con colecciones backbone",
                "description":"Este módulo está renderizado con backbone usando una plantilla generales e incluyendo una vista de colección de ejemplo.",
                "pane_title":"La colección intereda empieza aquí:",
                "table":[
                    {
                        "data":"construye",
                        "data2":"cosas",
                        "data3":"chulas",
                        "data4":"con",
                        "data5":"backbone"
                    },
                    {
                        "data":"nueva",
                        "data2":"generación",
                        "data3":"de",
                        "data4":"herramientas",
                        "data5":"front-end"
                    },
                    {
                        "data":"piensa",
                        "data2":"planifica",
                        "data3":"y empieza",
                        "data4":"a programar",
                        "data5":"rápidamente"
                    },
                    {
                        "data":"nunca",
                        "data2":"fué",
                        "data3":"tan",
                        "data4":"fácil",
                        "data5":"desarrollar"
                    },
                    {
                        "data":"gran",
                        "data2":"poder",
                        "data3":"conlleva",
                        "data4":"gran",
                        "data5":"responsabilidad"
                    }
                ]
            }
        }
    }
}