export default class Display {
    constructor(w, h) {
        this.canvas = document.createElement('canvas'),
        this.width = w,
        this.height = h,
        this.context = this.canvas.getContext('2d')
    }

    createCanvas() {
        const body = document.getElementById('body');
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        body.appendChild(this.canvas);
    }

    drawObject(x,y,w,h, color) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, w, h);
    }

    drawImg(image,sx,sy,sw,sh,x,y,w,h) {
        this.context.drawImage(image, sx, sy, sw, sh, x, y, w, h);
    }
}