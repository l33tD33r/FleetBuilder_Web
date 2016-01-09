interface ISquadronTypeDirectiveScope extends ng.IScope {
    type: string;
    icon: string;
    name: string;
}

class SquadronTypeDirective implements ng.IDirective {

    constructor() {
    }

    restrict: string = "E";
    templateUrl: string = "./App/Squadron/SquadronType-Partial.html";
    scope: any = {
        type: "=",
        icon: "@",
        name: "@"
    };

    link(
        scope: ISquadronTypeDirectiveScope,
        element: ng.IAugmentedJQuery,
        atts: ng.IAttributes,
        transclude: ng.ITranscludeFunction): void {

        var icon: string;
        var name: string;

        switch (SquadronType[scope.type]) {
            case SquadronType.A_Wing:
                icon = "./App/Images/A_Wing.png";
                name = "A-wing";
                break;
            case SquadronType.B_Wing:
                icon = "./App/Images/B_Wing.png";
                name = "B-wing";
                break;
            case SquadronType.X_Wing:
                icon = "./App/Images/X_Wing.png";
                name = "X-wing";
                break;
            case SquadronType.Y_Wing:
                icon = "./App/Images/Y_Wing.png";
                name = "Y-wing";
                break;
            case SquadronType.TIE_Advanced:
                icon = "./App/Images/TIE_Advanced.png";
                name = "TIE Advanced";
                break;
            case SquadronType.TIE_Bomber:
                icon = "./App/Images/TIE_Bomber.png";
                name = "TIE Bomber";
                break;
            case SquadronType.TIE_Fighter:
                icon = "./App/Images/TIE_Fighter.png";
                name = "TIE Fighter";
                break;
            case SquadronType.TIE_Interceptor:
                icon = "./App/Images/TIE_Interceptor.png";
                name = "TIE Interceptor";
                break;
        }

        scope.icon = icon;
        scope.name = name;
    }

    static factory(): ng.IDirectiveFactory {
        const factory = () => new SquadronTypeDirective();
        factory.$inject = [];
        return factory;
    }
}