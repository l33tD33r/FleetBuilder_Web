interface ITable {
    row: number;
    column: number;
    width: number;
    height: number;
}

interface IInset {
    x: number;
    y: number;
}

class AttackDiceCanvas {

    private attackDice: Array<string>;

    private context: CanvasRenderingContext2D;
    
    private width: number;
    private height: number;

    private dieSize: number = 8;
    private dieGap: number = 2;

    constructor(
        attackDice: Array<string>,
        context: CanvasRenderingContext2D,
        width: number,
        height: number
        ) {

        this.attackDice = attackDice;
        this.context = context;
        this.width = width;
        this.height = height;
    }

    paint(): void {

        var dieCount = this.attackDice.length;

        var table = this.calculateTable(dieCount);

        var inset = this.calculateInset(table);

        var cell: number = 0;
        var row: number = 0;
        var column: number = 0;

        var x = inset.x;
        var y = inset.y;

        this.attackDice.forEach((die: string) => {
            this.paintDie(AttackDie[die], x, y);

            cell++;

            if (column + 1 >= table.column) {
                x = inset.x + ((this.dieSize + this.dieGap) / 2);
                y += this.dieSize;
                row++;
                column = 0;
            } else {
                x += this.dieSize + this.dieGap;
                column++;
            }
        });
    }

    private calculateTable(dieCount: number): ITable {
        var maximumColumnCount;

        switch (dieCount) {
            case 1:
            case 2:
                maximumColumnCount = dieCount;
                break;
            default:
                maximumColumnCount = Math.ceil(dieCount / 2);
                break;
        }

        var columnCount: number = 0;
        var tableWidth: number = 0;
        for (var i: number = 0; i < dieCount; i++) {
            if (columnCount >= maximumColumnCount) {
                break;
            }
            var possibleTableWidth = tableWidth;
            if (i > 0) {
                possibleTableWidth += this.dieGap;
            }
            possibleTableWidth += this.dieSize;
            if (possibleTableWidth >= this.width) {
                break;
            }
            tableWidth = possibleTableWidth;
            columnCount++;
        }
        var rowCount: number = Math.ceil(dieCount / columnCount);

        if (rowCount > 1 && rowCount * columnCount == dieCount) {
            tableWidth += this.dieSize / 2;
        }

        return {
            row: rowCount,
            column: columnCount,
            width: tableWidth,
            height: rowCount * this.dieSize
        };
    }

    private calculateInset(table: ITable): IInset {
        var horizontalMargin = this.width - table.width;
        var xInset = horizontalMargin / 2;

        var verticalMargin = this.height - table.height;
        var yInset = verticalMargin / 2;

        return {
            x: xInset,
            y: yInset
        };
    }

    private paintDie(die: AttackDie, x: number, y: number): void {
        switch (die) {
            case AttackDie.Red:
                this.context.fillStyle = "#B11B20";
                this.context.strokeStyle = "#B11B20";
                break;
            case AttackDie.Blue:
                this.context.fillStyle = "#00AEEF";
                this.context.strokeStyle = "#00AEEF";
                break;
            case AttackDie.Black:
                this.context.fillStyle = "#000000";
                this.context.strokeStyle = "#000000";
                break;
        }

        this.context.beginPath();
        this.context.moveTo(
            x + this.dieSize / 2,
            y + 0
        );
        this.context.lineTo(
            x + this.dieSize,
            y + this.dieSize / 2
        );
        this.context.lineTo(
            x + this.dieSize / 2,
            y + this.dieSize
        );
        this.context.lineTo(
            x + 0,
            y + this.dieSize / 2
        );
        this.context.lineTo(
            x + this.dieSize / 2,
            y + 0
        );
        this.context.closePath();
        this.context.fill();
    }
}