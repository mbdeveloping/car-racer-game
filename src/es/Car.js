import {display} from './index';

export default class Car {
    constructor(x,y,width, height) {
        this.pos = {
            x: x,
            y: y
        },
        this.width = width,
        this.height = height
    }

    show() {
        display.drawObject(this.pos.x, this.pos.y, this.width, this.height);
    }
}