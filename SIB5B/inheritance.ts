class Hero{
    health : number = 100;
    speed : number = 100;
    magicalDefense : number = 100;
    pyhscialDefense : number = 100;
    basicAttack : number = 100;

    getInformation(): string {
        return `Darahnya ${this.health} dan Speednya ${this.speed}`
    }

    getHealing(heal: number) {
        this.health = this.health + heal

        return this.health
    }
}

const hero = new Hero();

console.log(hero.getInformation());
console.log(hero.getHealing(1000));