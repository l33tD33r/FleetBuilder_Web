interface IShipSpeedChartDirectiveScope extends ng.IScope {
    speedTable: Array<Array<number>>;
}

class ShipSpeedChartDirective implements ng.IDirective {

    constructor() {
    }

    restrict: string = "E";
    scope: any = {
        speedTable: "="
    };

    link(
        scope: IShipSpeedChartDirectiveScope,
        element: ng.IAugmentedJQuery,
        atts: ng.IAttributes,
        transclude: ng.ITranscludeFunction): void {

        scope.$watch("speedTable", (): void => {
            element.children().remove();
            for (var row: number = 3; row > -1; row--) {
                for (var column: number = 0; column < 4; column++) {

                    var speedElement = angular.element("<div></div>");
                    speedElement.addClass("speed-cell");

                    var hasSpeed: boolean = column < scope.speedTable.length;

                    if (!hasSpeed) {
                        speedElement.addClass("no-speed-cell");
                        element.append(speedElement);
                        continue;
                    }

                    var maneuvers: Array<number> = scope.speedTable[column];

                    var hasManeuver: boolean = row < maneuvers.length;

                    if (!hasManeuver) {
                        speedElement.addClass("no-maneuver-cell");
                        element.append(speedElement);
                        continue;
                    }

                    var maneuverTicks = maneuvers[row];

                    speedElement.addClass("maneuver-cell");
                    switch (maneuverTicks) {
                        case 0:
                            speedElement.text("-");
                            break;
                        case 1:
                            speedElement.text("I");
                            break;
                        case 2:
                            speedElement.text("II");
                            break;
                        default:
                            throw new Error("Expected maneuver range is 0-2. Found: " + maneuverTicks);
                    }
                    element.append(speedElement);
                }
            }

            for (var speed: number = 1; speed < 5; speed++) {
                var speedElement = angular.element("<div>" + speed + "</div>");
                speedElement.addClass("speed-cell");
                speedElement.addClass("speed-label-cell");
                element.append(speedElement);
            }
        });
    }

    static factory(): ng.IDirectiveFactory {
        const factory = () => new ShipSpeedChartDirective();
        factory.$inject = [];
        return factory;
    }
}