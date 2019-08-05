import {display} from './index';
import World from './World';
import Player from './Player';

export default class Game {
    constructor() {
        this.world = new World(),
        this.player = new Player('Player-1')
    }

    updateLevel() {
        if (this.player.score > 500) {
            this.world.level = 1;
        }
        if (this.player.score > 1500) {
            this.world.level = 2;
        }
    }

    update() {
        this.world.update();
        this.player.scoreCounter();
        this.updateLevel();
    }

    start() {
        this.world.show();
    }

}