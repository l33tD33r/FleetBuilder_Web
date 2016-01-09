interface IFleetBrowserScope extends ng.IScope {
    selectedFaction: string;
    ships: Array<IShip>;
    squadrons: Array<ISquadron>;
}

class FleetBrowserController {
    static $inject = ["$scope", "$http"];

    constructor(
        private $scope: IFleetBrowserScope,
        private $http: ng.IHttpService
    ) {
        $scope.selectedFaction = Faction[Faction.Imperial];

        $http.get("./Data/Ships.json").success((ships: Array<IShip>) => {
            $scope.ships = ships;
        }).error((error: any) => {
            $scope.ships = [];
        });

        $http.get("./Data/Squadrons.json").success((squadrons: Array<ISquadron>) => {
            $scope.squadrons = squadrons;
        }).error((error: any) => {
            $scope.squadrons = [];
        });
    }
}