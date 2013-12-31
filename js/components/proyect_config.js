Proyect.server = {
	local_php:{
		host: "http://localhost/",
        port: "",
		virtual_dir: "www/",
		central_service: "dummys/dispacher.php"
	}
}


Proyect.CONFIG = {

	app: {
		type: "auto",
		default_language: "en",
		main_menu: true,
		startModule: "home",
		version: "0.0.0"
	},

	services: {
		example: {				
			url: "myUrl",
			method: "GET"
		}
	}
}