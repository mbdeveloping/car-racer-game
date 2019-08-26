import {display} from './index';
import Car from './Car';
import Road from './Road';

export default class World {
    constructor() {
        this.spawnPos = [
            {isUsed: false, x: 0, y: -100},
            {isUsed: false, x: 70, y: -100},
            {isUsed: false, x: 170, y: -100},
            {isUsed: false, x: 240, y: -100}
        ],
        // this.playerCar = new Car(this.spawnPos[0].x, display.height - 200, 60, 100, 'black'),
        this.playerCar = new Car(this.spawnPos[0].x, display.height - 200, 60, 100),
        this.playerMoveCounter = 0,
        this.spawnCounter = 0,
        this.npcCars = ["red", "green", "yellow"],
        this.npc = [],
        this.levelData = [
            {cars: 2, speed: 2, playerSpeed: 10},
            {cars: 2, speed: 3, playerSpeed: 15},
            {cars: 2, speed: 5, playerSpeed: 20},
            {cars: 3, speed: 5, playerSpeed: 25},
            {cars: 3, speed: 7, playerSpeed: 30},
            {cars: 3, speed: 10, playerSpeed: 30},
            {cars: 3, speed: 13, playerSpeed: 35}
        ],  
        this.carsShowing = 1,
        this.level = 1,
        this.road = new Road(display),
        this.frame
    }

    createNpc(counter) {
        if (this.npc.length < this.levelData[this.level - 1].cars) {
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
        
        // for (let i = 0; i < this.npc.length; i++) {
            
        //     if (this.npc[i].yDir === 0 || this.npc[i].yDir === '0.0') {
        //         this.npc[i].yDir = Math.random().toFixed(1) * (1 - 0.5) + 0.5;
        //     }

        //     this.npc[i].pos.y += this.levelData[this.level - 1].speed * this.npc[i].yDir;

        //     if (this.level === 4) {
        //     }
        // }

        for (let i = 0; i < this.npc.length; i++) {
            
            if (this.npc[i].yDir === 0 || this.npc[i].yDir === '0.0') {
                this.npc[i].yDir = Math.random().toFixed(1) * (1 - 0.5) + 0.5;
            }
        }

        this.npc[0].pos.y += this.levelData[this.level - 1].speed * this.npc[0].yDir;

        if (this.npc[0].pos.y >= 100) {
            this.npc[1].pos.y += this.levelData[this.level - 1].speed * this.npc[1].yDir;
        }

        if (this.level >= 4) {
            if (this.npc[0].pos.y >= 200 && this.npc[1].pos.y >= 200) {
                this.npc[2].pos.y += this.levelData[this.level - 1].speed * this.npc[2].yDir;
            }
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
        

        if (this.playerCar.xDir > 0) {
            if (this.playerCar.pos.x > this.spawnPos[this.playerMoveCounter].x) {
                // console.log('right in');
                this.playerCar.pos.x = this.spawnPos[this.playerMoveCounter].x;
            }
        } else {
            // console.log('moving left');
            if (this.playerCar.pos.x <= this.spawnPos[this.playerMoveCounter].x) {
                this.playerCar.pos.x = this.spawnPos[this.playerMoveCounter].x;
            }
        }
    }

    updatePlayerSpeed() {
        this.road.speed = this.levelData[this.level - 1].playerSpeed;
    }

    collideObject() {
        //with world walls
        if (this.playerCar.pos.x < 0) {
            this.playerCar.pos.x = 0;
        } else if (this.playerCar.pos.x + this.playerCar.width >= display.width) {
            this.playerCar.pos.x = display.width - this.playerCar.width;
        }

        //with npc
        for (let i = 0; i < this.npc.length; i++) {
            if (this.playerCar.pos.x + this.playerCar.width >= this.npc[i].pos.x 
                && this.playerCar.pos.x < this.npc[i].pos.x + this.npc[i].width 
                && this.playerCar.pos.y <= this.npc[i].pos.y + this.npc[i].height
                && this.npc[i].pos.y <= this.playerCar.pos.y + this.playerCar.height) {
                this.playerCar.color = 'white';
                this.road.speed = 0;
                this.npc[i].pos.y -= this.levelData[this.level - 1].speed * this.npc[i].yDir;
            } 
        }
    }

    update() {
        this.road.moveLines();
        this.road.restoreLines();
        this.updatePlayerPos();
        this.updatePlayerSpeed();
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