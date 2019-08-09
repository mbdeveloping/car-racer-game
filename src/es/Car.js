import {display} from './index';

export default class Car {
    constructor(x, y, width, height, color = 'brown', spawnPos = null) {
        this.pos = {
            x: x,
            y: y
        },
        this.spawnPos = spawnPos,
        this.xDir = 0,
        this.yDir = 0,
        this.width = width,
        this.height = height,
        this.color = color,
        this.isMoving = false //for npc
    }

    moveCar(dir) {
        this.xDir = dir * 7;
    }

    stopCar() {
        this.xDir = 0;
    }

    show() {
        display.drawObject(this.pos.x, this.pos.y, this.width, this.height, this.color);
    }
}