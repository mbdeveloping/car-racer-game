import {display} from './index';

export default class Car {
    constructor(x,y,width, height) {
        this.pos = {
            x: x,
            y: y
        },
        this.xDir = 0,
        this.width = width,
        this.height = height
    }

    moveCar(dir) {
        this.xDir = dir * 6;
    }

    stopCar() {
        this.xDir = 0;
    }

    show() {
        display.drawObject(this.pos.x, this.pos.y, this.width, this.height);
    }
}