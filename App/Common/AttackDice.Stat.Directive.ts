interface IAttackDiceStatDirectiveScope extends ng.IScope {
    stat: string;
    attackDice: Array<string>;
}

class AttackDiceStatDirective implements ng.IDirective {

    constructor() {
    }

    restrict: string = "E";
    templateUrl: string = "./App/Common/AttackDice-Stat-Partial.html";
    scope: any = {
        stat: "@",
        attackDice: "="
    };

    link(
        scope: IAttackDiceStatDirectiveScope,
        element: ng.IAugmentedJQuery,
        atts: ng.IAttributes,
        transclude: ng.ITranscludeFunction): void {
    }


    static factory(): ng.IDirectiveFactory {
        const factory = () => new AttackDiceStatDirective();
        factory.$inject = [];
        return factory;
    }
}