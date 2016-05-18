jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 MaraSet in the list
// * All 3 MaraSet have at least one MaraMarmNav

sap.ui.require([
	"sap/ui/test/Opa5",
	"crud/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"crud/test/integration/pages/App",
	"crud/test/integration/pages/Browser",
	"crud/test/integration/pages/Master",
	"crud/test/integration/pages/Detail",
	"crud/test/integration/pages/Create",
	"crud/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "crud.view."
	});

	sap.ui.require([
		"crud/test/integration/MasterJourney",
		"crud/test/integration/NavigationJourney",
		"crud/test/integration/NotFoundJourney",
		"crud/test/integration/BusyJourney",
		"crud/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});