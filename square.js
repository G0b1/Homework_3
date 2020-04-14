class Square {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.squareSize = 19;
    }

    draw() {
        ctx5.beginPath();
        ctx5.rect(70 + this.x * this.squareSize, this.y * this.squareSize, this.squareSize, this.squareSize);
        ctx5.fillStyle = "brown";
        ctx5.fill();
        ctx5.stroke();
        ctx5.closePath();
    }
}