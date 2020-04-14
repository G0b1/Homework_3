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