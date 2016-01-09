interface IFleet {
    faction: Faction;
    ships: Array<IShip>;
    squadrons: Array<ISquadron>;
    creationDate: Date;
    name?: string;
    pointCost: number;
}