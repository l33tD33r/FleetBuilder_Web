interface IHullZone {
    shields: number;
    shipAttack: Array<AttackDie>;
}

interface IShipRef {
    type: ShipType;
    name: string;
}

interface IShip {
    faction: Faction;
    type: ShipType;
    name: string;
    hullPoints: number;
    squadronAttack: Array<AttackDie>;
    command: number;
    squadron: number;
    engineering: number;
    defenses: Array<DefenseToken>;
    speedTable: Array<Array<number>>;
    bow: IHullZone;
    stern: IHullZone;
    starboard: IHullZone;
    port: IHullZone;
    upgradeOptions: Array<ShipUpgradeType>;
    pointCost: number;
    // Upgrades
    title?: string;
    commander?: ICommander;
    upgrades: Array<IUpgrade>;
}