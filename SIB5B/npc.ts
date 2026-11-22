class NPC{
    name: string;
    health: number;
    speed: number;
    defense: number;
    attack: number;
    npctype: "Walk" | "Fly";

    constructor(name: string, health: number, speed: number, defense: number, attack: number, npctype: "Walk" | "Fly") {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.defense = defense;
        this.attack = attack;
        this.npctype = npctype;
}
//Method 
    walking(): void { this.speed +=2;
                console.log(
                    `${this.name} itu jalan. Speed bertambah ${this.speed}`
                )

    }
    attacking() : void { this.attack +=2;
                console.log(
                    `${this.name} itu pukul. Pukulan bertambah ${this.attack}`
                )

    }
    sprint() : void { this.speed +=4;
            console.log(
                    `${this.name} itu lari. Speed bertambah ${this.speed}`
                )

    }
    ultimateskill() : void { this.attack +=10;
            console.log(
                    `${this.name} itu ulti. Pukulan bertambah ${this.attack}`
                )

    }
}

const kaja = new NPC("Kaja", 1,2,3,4,"Fly");

kaja.walking();
kaja.attacking();
kaja.sprint();
kaja.ultimateskill();