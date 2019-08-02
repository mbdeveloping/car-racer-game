import {display} from './index';
import Car from './Car';
import Road from './Road';

export default class World {
    constructor() {
        this.speed = 7,
        // this.randomAcceleration = 0.5,
        this.playerCar = new Car(80, display.height - 200, 60, 100, 'black'),
        this.spawnPos = [
            {isUsed: false, x: 0, y: -100},
            {isUsed: false, x: 70, y: -100},
            {isUsed: false, x: 170, y: -100},
            {isUsed: false, x: 240, y: -100}
        ],
        this.npcCars = ["red", "green", "yellow"],
        this.npc = [],
        this.level = 1,
        this.road = new Road(display, this.speed),
        this.frameCounter = 0
    }

    createNpc() {
        if (this.npc.length <= this.level) {
            for (let i = 0; i < 2; i++) {
                let random = Math.floor(Math.random() * this.spawnPos.length);
        
                if (this.spawnPos[random].isUsed !== true) {
                    this.spawnPos[random].isUsed = true;
                    this.npc.push(new Car(
                        this.spawnPos[random].x,
                        this.spawnPos[0].y,
                        60,
                        100,
                        this.npcCars[Math.floor(Math.random() * this.npcCars.length)]
                    ));
                } else {
                    this.createNpc();
                }
            }
        }
    }

    showNpc() {
        for (let i = 0; i < this.npc.length; i++) {
            this.npc[i].show();
        }
    }

    moveNpc() {
        if (this.level === 1) {
            this.npc[0].pos.y += this.speed * 0.5;

            if (this.frameCounter > 60) {
                if (this.npc[1].acc === 0) {
                    this.npc[1].acc = Math.random().toFixed(1);
                }
                this.npc[1].pos.y += this.speed * this.npc[1].acc;
            }
        }
    }

    restoreNpc() {
        for (let i = 0; i < this.npc.length; i++) {
            if (this.npc[i].pos.y >= display.height) {
                this.npc[i].pos.y = this.spawnPos[0].y; //all has same spawn pos
                this.npc[i].pos.x = this.spawnPos[Math.floor(Math.random() * this.spawnPos.length)].x;
                this.npc[i].acc = 0; //restore acc
            }

            if (this.npc[1].pos.y >= display.height) {
                this.frameCounter = 0;
            }
        }
    }

    updateCarPos() {
        this.playerCar.pos.x += this.playerCar.xDir;
    }

    collideObject() {
        if (this.playerCar.pos.x < 0) {
            this.playerCar.pos.x = 0;
        } else if (this.playerCar.pos.x + this.playerCar.width >= display.width) {
            this.playerCar.pos.x = display.width - this.playerCar.width;
        }
    }

    countFrame() {
        this.frameCounter++;
    }

    update() {
        this.road.moveLines();
        this.road.restoreLines();
        this.updateCarPos();
        this.collideObject();
        this.createNpc();
        this.moveNpc();
        this.restoreNpc();
        this.countFrame();
    }

    show() {
        this.road.createRoad();
        this.road.createLines();
        this.playerCar.show();
        this.showNpc();
    }
}