class Cell {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.squareSize = 18;
    }

    draw() {
        ctx4.beginPath();
        ctx4.rect(70 + this.x * this.squareSize, this.y * this.squareSize, this.squareSize, this.squareSize);
        ctx4.fillStyle = this.color;
        ctx4.fill();
        ctx4.stroke();
        ctx4.closePath();
    }
}