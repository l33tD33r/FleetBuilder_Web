class ShipDetailDirective implements ng.IDirective {

    constructor() {
    }

    restrict: string = "E";
    templateUrl: string = "./App/Ship/Ship-Detail-Partial.html";
    scope: any = {
        ship: "="
    };

    link(
        scope: ng.IScope,
        element: ng.IAugmentedJQuery,
        atts: ng.IAttributes,
        transclude: ng.ITranscludeFunction): void {
    }


    static factory(): ng.IDirectiveFactory {
        const factory = () => new ShipDetailDirective();
        factory.$inject = [];
        return factory;
    }
}