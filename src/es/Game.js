import {display} from './index';
import World from './World';
import Player from './Player';

export default class Game {
    constructor() {
        this.world = new World(),
        this.player = new Player('Player-1')
    }

    updateLevel() {
        if (this.player.score > 200) {
            this.world.level = 2;
        }
         if (this.player.score > 500) {
            this.world.level = 3;
        }
         if (this.player.score > 1000) {
            this.world.level = 4;
        }
        if (this.player.score > 1500) {
            this.world.level = 5;
        }
        if (this.player.score > 2000) {
            this.world.level = 6;
        }
        if (this.player.score > 2500) {
            this.world.level = 7;
        }

        // if (this.player.score > 200) {
        //     this.world.level = 4;
        // }
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