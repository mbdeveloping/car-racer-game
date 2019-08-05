import {display} from './index';
import World from './World';
import Player from './Player';

export default class Game {
    constructor() {
        this.level = 1,
        this.world = new World(this.level),
        this.player = new Player()
    }

    update() {
        this.world.update();
    }

    start() {
        this.world.show();
    }

}