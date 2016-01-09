interface IIconDirectiveScope extends ng.IScope {
    type: string;
    id: string;
}

class IconDirective implements ng.IDirective {

    constructor() {
    }

    restrict: string = "A";
    scope: any = {
        type: "@",
        id: "@"
    };

    link(
        scope: IIconDirectiveScope,
        element: ng.IAugmentedJQuery,
        atts: ng.IAttributes,
        transclude: ng.ITranscludeFunction): void {

        var icon = IconFactory.createIcon(scope.type, scope.id);

        element.attr("src", icon.image);
        element.attr("alt", icon.name);
    }

    static factory(): ng.IDirectiveFactory {
        const factory = () => new IconDirective();
        factory.$inject = [];
        return factory;
    }
}

interface IIcon {
    image: string;
    name: string;
}

enum IconType {
    DefenseToken,
    HullZone,
    Ship,
    ShipUpgrade,
    Squadron,
    Stat
}

class IconFactory {
    static createIcon(type: string, id: string): IIcon {
        switch (IconType[type]) {
            case IconType.DefenseToken:
                return this.createDefenseTokenIcon(id);
            case IconType.HullZone:
                return this.createHullZoneIcon(id);
            case IconType.Ship:
                return this.createShipIcon(id);
            case IconType.ShipUpgrade:
                return this.createShipUpgradeIcon(id);
            case IconType.Squadron:
                return this.createSquadronIcon(id);
            case IconType.Stat:
                return this.createStatIcon(id);
            default:
                throw new Error("Unknown IconType:" + type);
        }
    }

    static createDefenseTokenIcon(id: string): IIcon {
        var image: string;
        var name: string;

        switch (DefenseToken[id]) {
            case DefenseToken.Brace:
                image = "./Images/Brace.png";
                name = "Brace";
                break;
            case DefenseToken.Contain:
                image = "./Images/Contain.png";
                name = "Contain";
                break;
            case DefenseToken.Evade:
                image = "./Images/Evade.png";
                name = "Evade";
                break;
            case DefenseToken.Redirect:
                image = "./Images/Redirect.png";
                name = "Redirect";
                break;
            case DefenseToken.Scatter:
                image = "./Images/Scatter.png";
                name = "Scatter";
                break;
            default:
                throw new Error("Unknown DefenseToken:" + id);
        }

        return {
            image: image,
            name: name
        };
    }

    static createHullZoneIcon(id: string): IIcon {
        var image: string;
        var name: string;

        switch (ShipType[id]) {
            case ShipType.AssaultFrigate:
                image = "./Images/Assault Frigate Hull Zones.png";
                name = "Assault Frigate";
                break;
            case ShipType.CorellianCorvette:
                image = "./Images/Corellian Corvette Hull Zones.png";
                name = "Corellian Corvette";
                break;
            case ShipType.GladiatorStarDestroyer:
                image = "./Images/Gladiator Star Destroyer Hull Zones.png";
                name = "Gladiator Star Destroyer";
                break;
            case ShipType.ImperialStarDestroyer:
                image = "./Images/Imperial Star Destroyer Hull Zones.png";
                name = "Imperial Star Destroyer";
                break;
            case ShipType.MonCalCruiser:
                image = "./Images/MonCal Cruiser Hull Zones.png";
                name = "MonCal Cruuiser";
                break;
            case ShipType.MonCalFrigate:
                image = "./Images/MonCal Frigate Hull Zones.png";
                name = "MonCal Frigate";
                break;
            case ShipType.NebulonFrigate:
                image = "./Images/Nebulon Frigate Hull Zones.png";
                name = "Nebulon Frigate";
                break;
            case ShipType.RaiderCorvette:
                image = "./Images/Raider Corvette Hull Zones.png";
                name = "Raider Corvette";
                break;
            case ShipType.VictoryStarDestroyer:
                image = "./Images/Victory Star Destroyer Hull Zones.png";
                name = "Victory Star Destroyer";
                break;
            default:
                throw new Error("Unknown ShipeType:" + id);
        }

        return {
            image: image,
            name: name
        };
    }

    static createShipIcon(id: string): IIcon {
        var image: string;
        var name: string;

        switch (ShipType[id]) {
            case ShipType.AssaultFrigate:
                image = "./Images/Assault Frigate.png";
                name = "Assault Frigate";
                break;
            case ShipType.CorellianCorvette:
                image = "./Images/Corellian Corvette.png";
                name = "Corellian Corvette";
                break;
            case ShipType.GladiatorStarDestroyer:
                image = "./Images/Gladiator Star Destroyer.png";
                name = "Gladiator Star Destroyer";
                break;
            case ShipType.ImperialStarDestroyer:
                image = "./Images/Imperial Star Destroyer.png";
                name = "Imperial Star Destroyer";
                break;
            case ShipType.MonCalCruiser:
                image = "./Images/MonCal Cruiser.png";
                name = "MonCal Cruuiser";
                break;
            case ShipType.MonCalFrigate:
                image = "./Images/MonCal Frigate.png";
                name = "MonCal Frigate";
                break;
            case ShipType.NebulonFrigate:
                image = "./Images/Nebulon Frigate.png";
                name = "Nebulon Frigate";
                break;
            case ShipType.RaiderCorvette:
                image = "./Images/Raider Corvette.png";
                name = "Raider Corvette";
                break;
            case ShipType.VictoryStarDestroyer:
                image = "./Images/Victory Star Destroyer.png";
                name = "Victory Star Destroyer";
                break;
            default:
                throw new Error("Unknown ShipeType:" + id);
        }

        return {
            image: image,
            name: name
        };
    }

    static createShipUpgradeIcon(id: string): IIcon {
        var image: string;
        var name: string;

        switch (ShipUpgradeType[id]) {
            case ShipUpgradeType.DefensiveRetrofit:
                image = "./Images/DefensiveRetrofit.png";
                name = "Defensive Retrofit";
                break;
            case ShipUpgradeType.IonCannons:
                image = "./Images/IonCannons.png";
                name = "Ion Cannons";
                break;
            case ShipUpgradeType.OffensiveRetrofit:
                image = "./Images/OffensiveRetrofit.png";
                name = "Offensive Retrofit";
                break;
            case ShipUpgradeType.Officer:
                image = "./Images/Officer.png";
                name = "Officer";
                break;
            case ShipUpgradeType.Ordnance:
                image = "./Images/Ordnance.png";
                name = "Ordnance";
                break;
            case ShipUpgradeType.SupportTeam:
                image = "./Images/SupportTeam.png";
                name = "Support Team";
                break;
            case ShipUpgradeType.Turbolasers:
                image = "./Images/Turbolasers.png";
                name = "Turbolasers";
                break;
            case ShipUpgradeType.WeaponsTeam:
                image = "./Images/WeaponsTeam.png";
                name = "Weapons Team";
                break;
        }

        return {
            image: image,
            name: name
        };
    }

    static createSquadronIcon(id: string): IIcon {
        var image: string;
        var name: string;

        switch (SquadronType[id]) {
            case SquadronType.A_Wing:
                image = "./Images/A-Wing.png";
                name = "A-wing";
                break;
            case SquadronType.B_Wing:
                image = "./Images/B-Wing.png";
                name = "B-wing";
                break;
            case SquadronType.X_Wing:
                image = "./Images/X-Wing.png";
                name = "X-wing";
                break;
            case SquadronType.Y_Wing:
                image = "./Images/Y-Wing.png";
                name = "Y-wing";
                break;
            case SquadronType.TIE_Advanced:
                image = "./Images/TIE Advanced.png";
                name = "TIE Advanced";
                break;
            case SquadronType.TIE_Bomber:
                image = "./Images/TIE Bomber.png";
                name = "TIE Bomber";
                break;
            case SquadronType.TIE_Fighter:
                image = "./Images/TIE Fighter.png";
                name = "TIE Fighter";
                break;
            case SquadronType.TIE_Interceptor:
                image = "./Images/TIE Interceptor.png";
                name = "TIE Interceptor";
                break;
            case SquadronType.YT_1300:
                image = "./Images/YT-1300.png";
                name = "YT-1300";
                break;
            case SquadronType.YT_2400:
                image = "./Images/YT-2400.png";
                name = "YT-2400";
                break;
            case SquadronType.HWK_290:
                image = "./Images/HWK-290.png";
                name = "HWK-290";
                break;
            case SquadronType.Scurrg_H6_Bomber:
                image = "./Images/Scurrg H-6 Bomber.png";
                name = "Scurrg H-6 Bomber";
                break;
            case SquadronType.Firespray_31:
                image = "./Images/Firespray-31.png";
                name = "Firespray-31";
                break;
            case SquadronType.YV_666:
                image = "./Images/YV-666.png";
                name = "YV-666";
                break;
            case SquadronType.JumpMaster5000:
                image = "./Images/JumpMaster 5000.png";
                name = "JumpMaster 5000";
                break;
            case SquadronType.AggressorAssaultFighter:
                image = "./Images/Aggressor Assault Fighter.png";
                name = "Aggressor Assault Fighter";
                break;
            default:
                throw new Error("Unknown SquadronType:" + id);
        }

        return {
            image: image,
            name: name
        };
    }

    static createStatIcon(id: string): IIcon {
        var image: string;
        var name: string;

        switch (Stat[id]) {
            case Stat.HullPoints:
                image = "./Images/HullPoints.png";
                name = "Hull Points";
                break;
            case Stat.ShipAttack:
                image = "./Images/ShipAttack.png";
                name = "Ship Attack";
                break;
            case Stat.SquadronAttack:
                image = "./Images/SquadronAttack.png";
                name = "Squadron Attack";
                break;
            case Stat.Speed:
                image = "./Images/Speed.png";
                name = "Speed";
                break;
            default:
                throw new Error("Unknown Stat:" + id);
        }

        return {
            image: image,
            name: name
        };
    }   
}