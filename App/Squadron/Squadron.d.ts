interface ISquadronRef {
    type: SquadronType;
    name: string;
    hero?: string;
}

interface ISquadron {
    faction: Faction;
    type: SquadronType;
    name: string;
    hero?: string;
    speed: number;
    hullPoints: number;
    squadronAttack: Array<AttackDie>;
    shipAttack: Array<AttackDie>;
    abilities?: Array<string>;
    keywords?: Array<string>;
    defenses?: Array<DefenseToken>;
    pointCost: number;
}