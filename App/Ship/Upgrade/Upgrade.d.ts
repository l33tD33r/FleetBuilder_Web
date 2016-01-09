interface IUpgradeRef {
    type: ShipUpgradeType;
    name: string;
}

interface IUpgrade {
    faction?: Faction;
    type: ShipUpgradeType;
    modification?: boolean;
    name: string;
    description: string;
    pointCost: number;
}