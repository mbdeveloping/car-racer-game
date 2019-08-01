export default class Road {
    constructor(display, speed) {
        this.display = display,
        this.speed = speed,
        this.width = 300,
        this.height = display.height,
        this.color = 'rgb(77,84,92)',
        this.line = {
            x: (display.width / 2) - (10 / 2), //need removing hard coded 10/2
            y: [ -200, 0, 200, 400],
            width: 10,
            height: 100,
            color: 'rgb(250, 250, 250)'
        },
        this.lines = 4
    }

    createRoad() {
        this.display.context.fillStyle = this.color;
        this.display.context.fillRect(0, 0, this.width, this.height);
    }

    createLines() {
        for (let i = 0; i < this.lines; i++) {
            this.display.context.fillStyle = this.line.color;
            this.display.context.fillRect(this.line.x, this.line.y[i], this.line.width, this.line.height);
        }
    }

    moveLines() {
        for (let i = 0; i < this.lines; i++) {
            this.line.y[i] += this.speed;
        }
    }

    restoreLines() {
        for (let i = 0; i < this.lines; i++) {
            if (this.line.y[i] >= this.display.height) {
                this.line.y[i] = -this.line.height * 2;
            }
        }
    }
}