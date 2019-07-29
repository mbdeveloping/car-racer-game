// import {game, start} from './index';

// export default class Controller {
//     constructor() {
//         this.aPressed = false;
//         this.dPressed = false;
//     }

//     keyPressed(e) {
//         switch(e.keyCode) {
//             case 13: start(); break;
//             case 65: game.world.moveCar(-1); this.aPressed = true; break;
//             case 68: game.world.moveCar(1); this.dPressed = true; break;
//         }

//         console.log(this.aPressed);
//         console.log(this.dPressed);
//     }

//     keyReleased(e) {
//         switch(e.keyCode) {
//             // case 87: game.world.speed = 0; break;
//             case 65: this.aPressed = false; break;
//             case 68: this.dPressed = false; break;
//         }

//         if (this.aPressed === false && this.dPressed === false) {
//             game.world.stopCar();
//         }
//     }
// }