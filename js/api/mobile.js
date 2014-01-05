/**
	* Mobile 
	* @class Mobile
	* @requires cordova.js and device cordova plugin
*/
var Mobile = {};
(function() {

	this.OS;
	this.OSVersion;
	this.DeviceModel;

	this.load = function() {

		document.addEventListener("deviceready", onMobileReady, false);
	    
	    function onMobileReady() {
			setOS();
			setOSVersion();
			setDeviceModel();

			alert("Cordova is active and running app in " + Mobile.DeviceModel + " with OS " + Mobile.OS + " " + Mobile.OSVersion)
			alert("You can remove this test alerts in /api/mobile.js")

			addStylesToBody();
			loadAllPlatformsFunctions();

			switch (Mobile.OS){
				case "Android":
					loadAndroidOnlyFunctions();
				break;

				case "BlackBerry 10":
					loadBlackberryOnlyFunctions();
				break;

				case "iOS":
					loadiOSOnlyFunctions();
				break;

				case "WinCE":
					loadWindowsPhoneOnlyFunctions();
				break;

				case "Tizen":
					loadTizenOnlyFunctions();
				break;
				
			}
	    }		

	};

	this.eventActions = {

		onBackButton: function() {
			alert("you can customize personal actions for back native button in /api/mobile.js function onBackButton");
			history.back();
		},

		onMenuButton: function(e) {
			alert("you can customize personal actions for menu native button in /api/mobile.js function onMenuButton");
		},

		onPause: function(e) {
			alert("you can customize personal actions for end os pause event in /api/mobile.js function onPause");
		},

		onResume: function(e) {
			alert("you can customize personal actions for resume event in /api/mobile.js function onResume");
		}

	};

	var setOS = function () {		
		Mobile.OS = device.platform;
	};

	var setOSVersion = function () {
		Mobile.OSVersion = device.version;
	};

	var setDeviceModel = function () {
		Mobile.DeviceModel = device.model;
	};

	var addStylesToBody = function (){
		$("body").addClass(Mobile.OS);
		$("body").addClass(Mobile.OSVersion);
	};

	var loadAllPlatformsFunctions = function (){
		document.addEventListener("pause", Mobile.eventActions.onPause, false);
		document.addEventListener("resume", Mobile.eventActions.onResume, false);
	};

	var loadAndroidOnlyFunctions = function (){
		document.addEventListener("backbutton", Mobile.eventActions.onBackButton, false);
		document.addEventListener("menubutton", Mobile.eventActions.onMenuButton, false);
	};

	var loadBlackberryOnlyFunctions = function (){
		//ADD HERE YOUR CUSTOM CODE ONLY FOR BLACKBERRY 10 DEVICES
	};

	var loadWindowsPhoneOnlyFunctions = function (){
		//ADD HERE YOUR CUSTOM CODE ONLY FOR W-PHONE DEVICES
	};

	var loadiOSOnlyFunctions = function (){
		//ADD HERE YOUR CUSTOM CODE ONLY FOR IOS DEVICES
	};

	var loadTizenOnlyFunctions = function (){
		//ADD HERE YOUR CUSTOM CODE ONLY FOR TIZEN DEVICES
	};

}).apply(Mobile);