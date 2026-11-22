class Turtle {
    hp: number = 100;
    attack: number = 15;
    defense: number = 15;
    speed: number = 10;
    dead: boolean = false;

    basicAttack(): number {
        return this.attack
    }
}