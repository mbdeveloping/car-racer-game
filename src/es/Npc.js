import Car from './Car';

export default class Npc extends Car {
    constructor (x, y, width, height, color, spawnPos) {
        super(x, y, width, height, color);
        this.spawnPos = spawnPos
    }

    moveCar() {
        // super.moveCar();

    }
}