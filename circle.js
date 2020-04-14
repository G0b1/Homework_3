class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = 1;
        this.color = "";
    }

    changeColor() {
        if (this.dx == 1) {
            return "purple";
        }
        if (this.dx == -1) {
            return "green";
        }
    }

    changeRadius() {
        if (this.dx == 1) {
            return this.r = this.r + 0.2;
        }
        if (this.dx == -1) {
            return this.r = this.r - 0.2;
        }
    }

    draw() {
        ctx3.beginPath();
        ctx3.arc(this.x,
            this.y,
            this.r,
            0,
            2 * Math.PI);
        ctx3.stroke();
        // the fill color
        ctx3.fillStyle = this.color;
        ctx3.fill();

        ctx3.closePath();
    }

    move(sx) {
            this.update();
            this.color = this.changeColor();
            this.changeRadius();
            this.x += sx * this.dx;
            this.draw();
        }
        //reverse the x coordinates when the circle touches the side
    update() {
        if (this.x + this.r > canvas3.width) {
            this.dx = -1;
        }
        if (this.x - this.r < 0) {
            this.dx = 1;
        }
    }
}