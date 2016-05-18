jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"crud/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"crud/test/integration/pages/App",
	"crud/test/integration/pages/Browser",
	"crud/test/integration/pages/Master",
	"crud/test/integration/pages/Detail",
	"crud/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "crud.view."
	});

	sap.ui.require([
		"crud/test/integration/NavigationJourneyPhone",
		"crud/test/integration/NotFoundJourneyPhone",
		"crud/test/integration/BusyJourneyPhone"
	], function() {
		QUnit.start();
	});
});