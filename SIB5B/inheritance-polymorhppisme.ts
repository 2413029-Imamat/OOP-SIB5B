class PublicEnemy {
    hp: number;
    attack: number;
    defense: number;
    speed: number;

    constructor(hp: number, attack: number, defense: number, speed: number) {
        this.hp = hp;
        this.attack =attack;
        this.defense = defense;
        this.speed = speed;
    }

    basicAttack(): number {
        return (this.attack = 15);
    }
}

class Lord extends PublicEnemy {
    constructor() {
        super(1600, 100, 100, 100)
    }
    
    areaEffect(): void {
        this.attack
    }
}
class Turtle extends PublicEnemy{
    basicAttack(): number {
        return (this.attack = 20)
    }
}
class BlueBuff{}
class RedBuff{}