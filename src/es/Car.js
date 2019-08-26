import {display, game} from './index';

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
        this.img = new Image(),
        this.img.src = cars
    }

    moveCar(dir) {
        if (dir === -1) { //left
            if (game.world.playerMoveCounter > 0) {
                game.world.playerMoveCounter += dir;
            }
        }
        else if (dir === 1) { //right
            if (game.world.playerMoveCounter < game.world.spawnPos.length - 1) {
                game.world.playerMoveCounter += dir;
            }
        }
        this.xDir = dir * 10;
    }

    stopCar() {
        this.xDir = 0;
    }

    show() {
        // display.drawObject(this.pos.x, this.pos.y, this.width, this.height, this.color);
        display.drawObject(img, sx, sy, sw, sh, x, y, w, h);
    }
}