import {display} from './index';
import Car from './Car';
import Npc from './Npc';
import Road from './Road';

export default class World {
    constructor() {
        // this.randomAcceleration = 0.5,
        this.playerCar = new Car(80, display.height - 200, 60, 100, 'black'),
        this.spawnPos = [
            {isUsed: false, x: 0, y: -100},
            {isUsed: false, x: 70, y: -100},
            {isUsed: false, x: 170, y: -100},
            {isUsed: false, x: 240, y: -100}
        ],
        this.spawnCounter = 0,
        this.npcCars = ["red", "green", "yellow"],
        this.npc = [],
        this.levelData = [
            {cars: 2, speed: 7},
            {cars: 1, speed: 7}
        ],
        this.level = 1,
        this.road = new Road(display, this.levelData[this.level].speed)
    }

    createNpc(counter) {
        if (this.npc.length < this.levelData[this.level].cars) {
            counter = Math.floor(Math.random() * (this.spawnPos.length));

            if (this.spawnPos[counter].isUsed === false) {
                this.spawnPos[counter].isUsed = true;

                this.npc.push(new Car(
                    this.spawnPos[counter].x,
                    this.spawnPos[0].y,
                    60,
                    100,
                    this.npcCars[Math.floor(Math.random() * (this.npcCars.length))],
                    counter
                ));
            } else {
                if (counter === this.spawnPos.length - 1) {
                    this.createNpc(0);
                } else {
                    this.createNpc(counter + 1);
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
        for (let i = 0; i < this.npc.length; i++) {
            
            if (this.npc[i].acc === 0 || this.npc[i].acc === '0.0') {
                this.npc[i].acc = Math.random().toFixed(1);
            }
            this.npc[i].pos.y += this.levelData[this.level].speed * this.npc[i].acc;;
        }
    }

    restoreNpc() {
        for (let i = 0; i < this.npc.length; i++) {
            if (this.npc[i].pos.y >= display.height) {
                this.spawnPos[this.npc[i].spawnPos].isUsed = false;
                this.npc.splice(i, 1);
            }
        }
    }

    updatePlayerPos() {
        this.playerCar.pos.x += this.playerCar.xDir;
    }

    collideObject() {
        //with world walls
        if (this.playerCar.pos.x < 0) {
            this.playerCar.pos.x = 0;
        } else if (this.playerCar.pos.x + this.playerCar.width >= display.width) {
            this.playerCar.pos.x = display.width - this.playerCar.width;
        }

        //with other objects
        for (let i = 0; i < this.npc.length; i++) {
            //x collide
            if (this.playerCar.pos.x + this.playerCar.width >= this.npc[i].pos.x && this.playerCar.pos.x < this.npc[i].pos.x + this.npc[i].width) {
                // console.log('X colliding!');
            } 
            //y collide
            else if (this.playerCar.pos.y <= this.npc[i].pos.y + this.npc[i].height) {
                console.log('y colliding');
            }
        }
    }

    update() {
        this.road.moveLines();
        this.road.restoreLines();
        this.updatePlayerPos();
        this.collideObject();
        this.createNpc(this.spawnCounter);
        this.moveNpc();
        this.restoreNpc();
    }

    show() {
        this.road.createRoad();
        this.road.createLines();
        this.playerCar.show();
        this.showNpc();
    }
}