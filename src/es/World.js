import {display} from './index';
import Car from './Car';
import Road from './Road';

export default class World {
    constructor() {
        this.speed = 7,
        this.randomSpeed = Math.floor(Math.random() * 2) + 1,
        this.playerCar = new Car(80, display.height - 200, 60, 100, 'black'),
        this.carsData = [
            {
                "car": "black",
                "pos": {
                    x: 170,
                    y: 0
                }
            },
            {
                "car": "green",
                "pos": {
                    x: 20,
                    y: 0
                }
            },
            {
                "car": "yellow",
                "pos": {
                    x: 40,
                    y: 0
                }
            }
        ],
        this.npc = [],
        this.level = 1,
        this.road = new Road(display, this.speed);
    }

    createNpc() {
        if (this.npc.length <= this.level) {
            this.npc.push(new Car(
                this.carsData[0].pos.x,
                this.carsData[0].pos.y,
                60,
                100,
                "red"
            ));
        }
    }

    showNpc() {
        this.npc[0].show();
    }

    moveNpc() {
        this.npc[0].pos.y += this.speed * 0.5;
    }

    restoreNpc() {
        if (this.npc[0].pos.y >= display.height) {
            this.npc[0].pos.y = -200;
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

    update() {
        this.road.moveLines();
        this.road.restoreLines();
        this.updateCarPos();
        this.collideObject();
        this.createNpc();
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