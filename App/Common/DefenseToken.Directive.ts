interface IDefenseTokenDirectiveScope extends ng.IScope {
    defense: string;
}

class DefenseTokenDirective implements ng.IDirective {

    constructor() {
    }

    restrict: string = "E";
    templateUrl: string = "./App/Common/DefenseToken-Partial.html";
    scope: any = {
        defense: "=",
    };

    link(
        scope: IDefenseTokenDirectiveScope,
        element: ng.IAugmentedJQuery,
        atts: ng.IAttributes,
        transclude: ng.ITranscludeFunction): void {
    }

    static factory(): ng.IDirectiveFactory {
        const factory = () => new DefenseTokenDirective();
        factory.$inject = [];
        return factory;
    }
}