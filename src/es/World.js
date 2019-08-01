import {display} from './index';
import Car from './Car';

export default class World {
    constructor() {
        this.roadColor = 'rgb(77,84,92)',
        this.linesColor = 'rgb(250, 250, 250)',
        this.lineWidth = 10,
        this.lineHeight = 100,
        this.lines = [],
        this.roadLinesVec = [
            {
                x: (display.width / 2) - (this.lineWidth / 2),
                y: -200
            },
            {
                x: (display.width / 2) - (this.lineWidth / 2),
                y: 0
            },
            {
                x: (display.width / 2) - (this.lineWidth / 2),
                y: 200
            },
            {
                x: (display.width / 2) - (this.lineWidth / 2),
                y: 400
            }
        ],
        this.speed = 5,
        this.randomSpeed = Math.floor(Math.random() * 2) + 1,
        this.playerCar = new Car(80, display.height - 200, 60, 100, 'black'),
        this.carsData = [
            {
                "car": "black",
                "pos": {
                    x: 170,
                    y: 0
                }
            },
            {
                "car": "green",
                "pos": {
                    x: 20,
                    y: 0
                }
            },
            {
                "car": "yellow",
                "pos": {
                    x: 40,
                    y: 0
                }
            }
        ],
        this.npc = [],
        this.level = 1
    }

    createRoad(ctx,w,h,color) {
        ctx.fillStyle = color;
        ctx.fillRect(0, 0, w, h);
    }

    createRoadLines(lines) {
        for (let i=0; i<lines.length; i++) {
            display.context.fillStyle = this.linesColor;
            display.context.fillRect(this.roadLinesVec[i].x, this.roadLinesVec[i].y, this.lineWidth, this.lineHeight);
        }
    }

    moveLines() {
        for (let i=0; i < this.roadLinesVec.length; i++) {
            this.roadLinesVec[i].y += this.speed;
        }
    }

    restoreLines() {
        for (let i=0; i < this.roadLinesVec.length; i++) {
            if (this.roadLinesVec[i].y >= display.height) {
                this.roadLinesVec[i].y = -this.lineHeight * 2;
            }
        }
    }

    createNpc() {
        if (this.npc.length <= this.level) {
            this.npc.push(new Car(
                this.carsData[0].pos.x,
                this.carsData[0].pos.y,
                60,
                100,
                "red"
            ));
        }
    }

    showNpc() {
        this.npc[0].show();
    }

    moveNpc() {
        this.npc[0].pos.y += this.speed * this.randomSpeed;
    }

    updateCarPos() {
        this.playerCar.pos.x += this.playerCar.xDir;
    }

    collideObject() {
        if (this.playerCar.pos.x < 0) {
            this.playerCar.pos.x = 0;
        } else if (this.playerCar.pos.x + this.playerCar.width >= display.width) {
            this.playerCar.pos.x = display.width - this.playerCar.width;
        }
    }

    update() {
        this.moveLines();
        this.restoreLines();
        this.updateCarPos();
        this.collideObject();
        this.createNpc();
        this.moveNpc();
    }

    show() {
        this.createRoad(display.context, display.width, display.height, this.roadColor);
        this.createRoadLines(this.roadLinesVec);
        this.playerCar.show();
        this.showNpc();
    }
}