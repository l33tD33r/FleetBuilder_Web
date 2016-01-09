interface IAttackDiceScope extends ng.IScope {
    attackDice: Array<string>;
    width?: string;
    height?: string;
}

class AttackDiceDirective implements ng.IDirective {

    constructor() {
    }

    restrict: string = "E";
    template: string = "<canvas />";
    scope: any = {
        attackDice: "=",
        width: "@",
        height: "@"
    };

    link(
        scope: IAttackDiceScope,
        element: ng.IAugmentedJQuery,
        atts: ng.IAttributes,
        transclude: ng.ITranscludeFunction): void {
        
        
        var canvasSelector = element.find("canvas");
        var canvas = <HTMLCanvasElement>canvasSelector[0];

        var width: string = "28px";
        var widthAdjustment: number = 0
        if (scope.width) {
            width = scope.width;
            widthAdjustment = -12;
        }

        var height: string = "24px";
        var heightAdjustment: number = -4;
        if (scope.height) {
            height = scope.height;
        }

        canvas.setAttribute("width", width);
        canvas.setAttribute("height", height);
        var context = canvas.getContext("2d");

        var attackDiceCanvas = new AttackDiceCanvas(scope.attackDice, context, parseInt(width) + widthAdjustment, parseInt(height) + heightAdjustment);
        attackDiceCanvas.paint();
    }

    static factory(): ng.IDirectiveFactory {
        const factory = () => new AttackDiceDirective();
        factory.$inject = [];
        return factory;
    }
}