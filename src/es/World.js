import {display} from './index';
import Car from './Car';

export default class World {
    constructor() {
        this.roadColor = 'rgb(77,84,92)',
        this.linesColor = 'rgb(250, 250, 250)',
        this.lineWidth = 20,
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
        this.speed = 2,
        // this.playerCarXdir = 0,
        this.playerCar = new Car(20, display.height - 120, 80, 100)

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

    collideObject() {
        if (this.playerCar.pos.x < 0) {
            this.playerCar.pos.x = 0;
        } else if (this.playerCar.pos.x + this.playerCar.width >= display.width) {
            this.playerCar.pos.x = display.width - this.playerCar.width;
        }
    }

    update() {
        //move road lines
        this.roadLinesVec[0].y += this.speed;
        this.roadLinesVec[1].y += this.speed;
        this.roadLinesVec[2].y += this.speed;
        this.roadLinesVec[3].y += this.speed;

        //restore road lines to starting point
        if (this.roadLinesVec[0].y >= display.height) {
            this.roadLinesVec[0].y = -this.lineHeight * 2;
        } else if (this.roadLinesVec[1].y >= display.height) {
            this.roadLinesVec[1].y = -this.lineHeight * 2;
        } else if (this.roadLinesVec[2].y >= display.height) {
            this.roadLinesVec[2].y = -this.lineHeight * 2;
        }
        else if (this.roadLinesVec[3].y >= display.height) {
            this.roadLinesVec[3].y = -this.lineHeight * 2;
        }

        //Update player car position
        this.playerCar.pos.x += this.playerCar.xDir;
        
        this.collideObject();
    }

    show() {
        this.createRoad(display.context, display.width, display.height, this.roadColor);
        this.createRoadLines(this.roadLinesVec);
        this.playerCar.show(this.playerCar.pos.x, this.playerCar.pos.y, this.playerCar.width,this.playerCar.height);
    }
}