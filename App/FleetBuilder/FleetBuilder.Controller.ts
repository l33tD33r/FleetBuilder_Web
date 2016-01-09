interface IFleetBuilderScope extends ng.IScope {
    fleet: IFleet;
    availableShips: Array<IShip>;
    availableSquadrons: Array<ISquadron>;
    availableCommanders: Array<ICommander>;
    availableUpgrades: Array<IUpgrade>;
    availableTitles: Array<ITitle>;
}

interface IRouteParams extends ng.route.IRouteParamsService {
    faction: string;
}

class FleetBuilderController {
    static $inject = ["$scope", "$http", "$routeParams"];

    constructor(
        private $scope: IFleetBuilderScope,
        private $http: ng.IHttpService,
        private $routeParams: IRouteParams
    ) {
        $scope.fleet = {
            faction: Faction[$routeParams.faction],
            ships: [] as IShip[],
            squadrons: [] as ISquadron[],
            creationDate: new Date(),
            pointCost: 0
        };

        $http.get("./Data/Ships.json").success((ships: Array<IShip>) => {
            $scope.availableShips = ships;
        }).error((error: any) => {
            $scope.availableShips = [];
        });

        $http.get("./Data/Squadrons.json").success((squadrons: Array<ISquadron>) => {
            $scope.availableSquadrons = squadrons;
        }).error((error: any) => {
            $scope.availableSquadrons = [];
        });
    }
}