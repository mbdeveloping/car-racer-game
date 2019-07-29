import {game, start} from './index';

export default class Controller {
    constructor() {
        this.isKeyPressed = false;
        this.isKeyReleased = true;
    }

    keyPressed(e) {
        // console.log(e.keyCode);
        switch(e.keyCode) {
            case 13: start(); break;
            case 65: game.world.moveCar(-1); break;
            case 68: game.world.moveCar(1); break;
        }
    }

    keyReleased(e) {
        switch(e.keyCode) {
            // case 87: game.world.speed = 0; break;
            case 65: game.world.stopCar(); break;
            case 68: game.world.stopCar(); break;
        }
    }
}