//------------------------ Exercitiul 1 -------------------
const canvas1 = document.getElementById("canvas1");
const ctx1 = canvas1.getContext("2d");
let x = 150;
let y = 70;
let arc = 25;

ctx1.beginPath();
ctx1.arc(x, y, arc, 0, 2 * Math.PI);
ctx1.stroke();
ctx1.fillStyle = "red";
ctx1.fill();
ctx1.closePath();

//------------------------ Exercitiul 2 -------------------
const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");

class EquilateralTriangle {
    // laturi : x1,y1, x2,y2, x3,y3
    constructor(culoare, laturi = []) {
        this.shapeColor = culoare;
        this.shapeSides = laturi;
    }

    h() {
        const side = this.shapeSides;
        //(x2+y2) - (x1+y1)
        const length = (side[2] + side[3]) - (side[0] + side[1]);

        return length * Math.cos(Math.PI / 6);
    }
    draw(h) {
        const side = this.shapeSides;
        ctx2.beginPath();
        ctx2.moveTo(side[0], side[1]);
        ctx2.lineTo(side[2], side[3]);
        ctx2.lineTo(side[4], side[5] - h);
        ctx2.closePath();

        // the outline
        ctx2.lineWidth = 2;
        ctx2.strokeStyle = '#666666';
        ctx2.stroke();

        // the fill color
        ctx2.fillStyle = this.shapeColor;
        ctx2.fill();
    }

}

const triunghi = new EquilateralTriangle("blue", [50, 100, 100, 100, 75, 100]);
const h = triunghi.h();
triunghi.draw(h);

//------------------------ Exercitiul 3 -------------------
const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");
class Circle {
    constructor(x, y, r) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.dx = 1;
        this.dy = 1;
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

    move(sx, sy) {
            this.update();
            this.color = this.changeColor();
            this.changeRadius();
            this.x += sx * this.dx;
            this.y += sy * this.dy;
            this.draw();
        }
        //reverse the x or y coordinates when the circle touches the side
    update() {
        if (this.x + this.r > canvas3.width || this.y + this.r > canvas3.height) {
            this.dx = -1;
            this.dy = -1;
        }
        if (this.x - this.r < 0 || this.y - this.r < 0) {
            this.dx = 1;
            this.dy = 1;
        }
    }
}

const cerc = new Circle(100, 75, 25);

function animateCircle() {
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    cerc.move(2, 0);
}
setInterval(animateCircle, 500); // 0.5 sec

//------------------------ Exercitiul 4 -------------------
const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");

const size = 8;

let grid = [];

const createGrid = () => {
    for (let row = 0; row < size; row++) {
        grid[row] = [];
        for (let column = 0; column < size; column++) {
            grid[row][column] = new Cell(column, row, (row + column) % 2 ? 'white' : 'black');
        }
    }
}

const drawGrid = () => {
    for (let row = 0; row < size; row++) {
        for (let column = 0; column < size; column++) {
            grid[row][column].draw();
        }
    }
}

// const square = new Cell(0,0, "black");
// square.draw();

createGrid();
drawGrid();

//------------------------ Exercitiul 5 -------------------
const canvas5 = document.getElementById("canvas5");
const ctx5 = canvas5.getContext("2d");

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

const patrat1 = new Square(2, 3);
const patrat2 = new Square(3, 3);
const patrat3 = new Square(3, 4);
const patrat4 = new Square(3, 5);
patrat1.draw();
patrat2.draw();
patrat3.draw();
patrat4.draw();