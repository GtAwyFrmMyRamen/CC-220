class curry {

    constructor(px, py, randomLocationRange) {
        function getRandomInt(max){
            return Math.floor(Math.random() * max);
        }
        this.px = px + getRandomInt(randomLocationRange);
        this.py = py + getRandomInt(randomLocationRange);
      }

getPX() {
    return this.px;
}

getPY() {
    return this.py
}


    draw() {


 

        //plate
        fill(255, 250, 209);
        ellipse(this.px, this.py, pw, ph)
        ellipse(this.px, this.py, pw - 30, ph - 30)

        //curry
        fill(115, 73, 34);
        arc(this.px - 20, this.py, 210, 200, 190, 150, PI + QUARTER_PI, CHORD);

        //rice
        fill(255, 255, 255);
        ellipse(this.px + 70, this.py, 180, 150);

        //carrots
        fill(255, 106, 0);
        circle(this.px, this.py + 20, 20);
        circle(this.px - 60, this.py - 40, 20);
        circle(this.px, this.py - 66, 20);
        circle(this.px - 30, this.py + 50, 20);
        circle(this.px - 50, this.py + 40, 20);


        //potat
        fill(201, 141, 99)
        ellipse(this.px, this.py + 25, 25, 35);
        ellipse(this.px - 40, this.py + 15, 25, 35);
        ellipse(this.px - 50, this.py - 60, 35, 25);

        //beef
        fill(77, 57, 43)
        square(this.px - 50, this.py + 30, 25,)
        square(this.px - 70, this.py + 50, 25,)
        square(this.px - 20, this.py - 50, 25,)
        square(this.px - 100, this.py - 70, 25,)
    }


}