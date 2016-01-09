interface IStatDirectiveScope extends ng.IScope {
    stat: string;
    value: string;
}

class StatDirective implements ng.IDirective {

    constructor() {
    }

    restrict: string = "E";
    templateUrl: string = "./App/Common/Stat-Partial.html";
    scope: any = {
        stat: "@",
        value: "="
    };

    link(
        scope: IStatDirectiveScope,
        element: ng.IAugmentedJQuery,
        atts: ng.IAttributes,
        transclude: ng.ITranscludeFunction): void {
    }


    static factory(): ng.IDirectiveFactory {
        const factory = () => new StatDirective();
        factory.$inject = [];
        return factory;
    }
}