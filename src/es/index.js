import '../sass/style.scss';
import Display from './Display';
import Game from './Game';
import Controller from './Controller';

export const display = new Display();
export const game = new Game();
export const controller = new Controller();

function setup() {
    display.createCanvas();

    //intro
    display.context.fillStyle = game.world.roadColor;
    display.context.fillRect(0, 0, display.width, display.height);
    display.context.fillStyle = 'white';
    display.context.font = "20px Arial";
    display.context.fillText("Press Enter to start", 60, display.height / 2);
}

export function start() {
    requestAnimationFrame(start);
    display.context.clearRect(0, 0, display.width, display.height);
    game.update();
    game.start();
}

setup();

window.addEventListener('keydown', controller.keyPressed);
window.addEventListener('keyup', controller.keyReleased);