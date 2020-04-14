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

const triunghi = new EquilateralTriangle("blue", [50, 100, 100, 100, 75, 100]);
const h = triunghi.h();
triunghi.draw(h);

//------------------------ Exercitiul 3 -------------------
const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");

const cerc = new Circle(100, 75, 25);

function animateCircle() {
    ctx3.clearRect(0, 0, canvas3.width, canvas3.height);
    cerc.move(2);
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

const patrat1 = new Square(2, 3);
const patrat2 = new Square(3, 3);
const patrat3 = new Square(3, 4);
const patrat4 = new Square(3, 5);
patrat1.draw();
patrat2.draw();
patrat3.draw();
patrat4.draw();