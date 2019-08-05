export default class Player {
    constructor(name) {
        this.name = name,
        this.score = 0,
        this.scoreEl = document.getElementById('score'),
        this.health = 1
    }

    scoreCounter() {
        if (this.health !==0) {
            this.scoreEl.innerHTML = `Score: ${this.score++}`;
        }
    }
}