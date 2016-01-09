interface IHullZoneDirectiveScope extends ng.IScope {
    hullZone: IHullZone;
}

class HullZoneDirective implements ng.IDirective {

    constructor() {
    }

    restrict: string = "E";
    templateUrl: string = "./App/Ship/HullZone-Partial.html";
    scope: any = {
        hullZone: "="
    };

    link(
        scope: IHullZoneDirectiveScope,
        element: ng.IAugmentedJQuery,
        atts: ng.IAttributes,
        transclude: ng.ITranscludeFunction): void {
    }

    static factory(): ng.IDirectiveFactory {
        const factory = () => new HullZoneDirective();
        factory.$inject = [];
        return factory;
    }
}