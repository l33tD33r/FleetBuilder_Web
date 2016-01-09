class SquadronDetailDirective implements ng.IDirective {

    constructor() {
    }

    restrict: string = "E";
    templateUrl: string = "./App/Squadron/Squadron-Detail-Partial.html";
    scope: any = {
        squadron: "=squadron"
    };

    link(
        scope: ng.IScope,
        element: ng.IAugmentedJQuery,
        atts: ng.IAttributes,
        transclude: ng.ITranscludeFunction): void {
    }

    
    static factory(): ng.IDirectiveFactory {
        const factory = () => new SquadronDetailDirective();
        factory.$inject = [];
        return factory;
    }
}