import {display} from './index';
import Car from './Car';
import Road from './Road';

export default class World {
    constructor() {
        this.speed = 7,
        this.playerCar = new Car(80, display.height - 200, 60, 100, 'black'),
        this.spawnPos = [
            {x: 0, y: -100},
            {x: 70, y: -100},
            {x: 170, y: -100},
            {x: 240, y: -100}
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
                this.npc.push(new Car(
                    this.spawnPos[Math.floor(Math.random() * this.spawnPos.length)].x,
                    this.spawnPos[0].y,
                    60,
                    100,
                    this.npcCars[Math.floor(Math.random() * this.npcCars.length)]
                ));
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
                this.npc[1].pos.y += this.speed * 0.5;
            }
        }
    }

    restoreNpc() {
        for (let i = 0; i < this.npc.length; i++) {
            if (this.npc[i].pos.y >= display.height) {
                this.npc[i].pos.y = this.spawnPos[0].y; //all has same spawn pos
                this.npc[i].pos.x = this.spawnPos[Math.floor(Math.random() * this.spawnPos.length)].x;
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