var app = angular.module("FleetBuilderApp", [
    "ngRoute"
]);

app.config(["$routeProvider",
    function ($routeProvider: angular.route.IRouteProvider) {
        $routeProvider
            .when("/Menu", {
                templateUrl: "./App/Menu/Menu-Partial.html"
            })
            .when("/Builder/:faction", {
                templateUrl: "./App/Fleetbuilder/FleetBuilder-Partial.html",
                controller: FleetBuilderController
            })
            .when("/Browser", {
                templateUrl: "./App/FleetBrowser/FleetBrowser-Partial.html",
                controller: FleetBrowserController
            })
            .otherwise({
                redirectTo: "/Menu"
            });
    }
]);

app.directive("fleetBuilderAttackDice", AttackDiceDirective.factory());
app.directive("fleetBuilderAttackDiceStat", AttackDiceStatDirective.factory());
app.directive("fleetBuilderDefenseToken", DefenseTokenDirective.factory());
app.directive("fleetBuilderHullZone", HullZoneDirective.factory());
app.directive("fleetBuilderIcon", IconDirective.factory());
app.directive("fleetBuilderProperty", PropertyDirective.factory());
app.directive("fleetBuilderStat", StatDirective.factory());
app.directive("fleetBuilderShipDetail", ShipDetailDirective.factory());
app.directive("fleetBuilderShipSpeedChart", ShipSpeedChartDirective.factory());
app.directive("fleetBuilderShipViewer", ShipsViewerDirective.factory());
app.directive("fleetBuilderSquadronDetail", SquadronDetailDirective.factory());
app.directive("fleetBuilderSquadronType", SquadronTypeDirective.factory());
