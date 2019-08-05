import '../sass/style.scss';
import Display from './Display';
import Game from './Game';
import Controller from './Controller';

export const display = new Display();
export const game = new Game();
let gameStarted = false;
// export const controller = new Controller();

function setup() {
    display.createCanvas();

    //intro
    display.context.fillStyle = game.world.roadColor;
    display.context.fillRect(0, 0, display.width, display.height);
    display.context.fillStyle = 'white';
    display.context.font = "20px Arial";
    display.context.fillText("Press Enter to start", 60, display.height / 2);
}

function init() {
    if (gameStarted === false) {
        gameStarted = true;
        start();
        game.player.scoreEl.style = 'opacity: 1';
    }
    
}

export function start() {
    requestAnimationFrame(start); 
    display.context.clearRect(0, 0, display.width, display.height);
    game.update();
    game.start();
}

function movementController() {
    let a = false;
    let d = false;

    window.addEventListener('keydown', (e) => {
        switch(e.keyCode) {
            case 13: init(); break;
            case 65: game.world.playerCar.moveCar(-1); a = true; break;
            case 68: game.world.playerCar.moveCar(1); d = true; break;
        }
    });

    window.addEventListener('keyup', (e) => {
        switch(e.keyCode) {
            case 65: a = false; break;
            case 68: d = false; break;
        }

        if (a === false && d === false) {
            game.world.playerCar.stopCar();
        }
    });
}

movementController();
setup();

// window.addEventListener('keydown', controller.keyPressed);
// window.addEventListener('keyup', controller.keyReleased);



