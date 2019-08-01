export default class Display {
    constructor() {
        this.canvas = document.createElement('canvas'),
        this.width = 300,
        this.height = 600,
        this.context = this.canvas.getContext('2d')
    }

    createCanvas(w,h) {
        const body = document.getElementById('body');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        body.appendChild(this.canvas);
    }

    drawObject(x,y,w,h, color) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, w, h);
    }
}