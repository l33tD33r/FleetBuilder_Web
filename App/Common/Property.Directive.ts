interface IPropertyDirectiveScope extends ng.IScope {
    name: string;
    value: any;
}

class PropertyDirective implements ng.IDirective {

    constructor() {
    }

    restrict: string = "E";
    templateUrl: string = "./App/Common/Property-Partial.html";
    scope: any = {
        name: "@",
        value: "="
    };

    link(
        scope: IPropertyDirectiveScope,
        element: ng.IAugmentedJQuery,
        atts: ng.IAttributes,
        transclude: ng.ITranscludeFunction): void {
    }

    static factory(): ng.IDirectiveFactory {
        const factory = () => new PropertyDirective();
        factory.$inject = [];
        return factory;
    }
}