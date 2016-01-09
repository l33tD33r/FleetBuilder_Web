interface IShipsViewerScope extends ng.IScope {
    ships: Array<IShip>;
    selectedShip: IShip;
    shipSelected(ship: IShip): void;
}
class ShipsViewerDirective implements ng.IDirective {

    constructor() {
    }

    restrict: string = "E";
    templateUrl: string = "./App/Fleet/ShipsViewer-Partial.html";
    scope: any = {
        ships: "="
    };

    link(
        scope: IShipsViewerScope,
        element: ng.IAugmentedJQuery,
        atts: ng.IAttributes,
        transclude: ng.ITranscludeFunction): void {
        
        scope.shipSelected = (ship: IShip): void => {
            scope.selectedShip = ship;
        };

        scope.$watch("ships", (): void => {
            if (scope.ships && scope.ships.length > 0) {
                scope.selectedShip = scope.ships[0];
            }
        });
    }

    static factory(): ng.IDirectiveFactory {
        const factory = () => new ShipsViewerDirective();
        factory.$inject = [];
        return factory;
    }
}