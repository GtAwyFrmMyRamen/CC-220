class curryItem {

    constructor(px, py, pw, ph, x,y,w,h) {
    this.px = px;
    this.py = py;
    this.pw = pw;
    this.ph = ph;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    }
getPX() {
    return this.px;
}

getPY() {
    return this.py
}

getPW() {
    return this.pw
}

getPH() {
    return this.ph
}

    draw() {

        var scribble = new Scribble(); 

        //collision
        rect(this.x, this.y, this.w, this.h)

        //plate
        fill(255, 250, 209);
        scribble.scribbleEllipse(this.px, this.py, this.pw, this.ph)
        scribble.scribbleEllipse(this.px, this.py, this.pw - 30, this.ph - 30)

        //curry
        fill(115, 73, 34);
        arc(this.px - 20, this.py, 210, 200, 190, 150, PI + QUARTER_PI, CHORD);

        //rice
        fill(255, 255, 255);
        scribble.scribbleEllipse(this.px + 70, this.py, 180, 150);

        //carrots
        fill(255, 106, 0);
        circle(this.px, this.py + 20, 20);
        circle(this.px - 60, this.py - 40, 20);
        circle(this.px, this.py - 66, 20);
        circle(this.px - 30, this.py + 50, 20);
        circle(this.px - 50, this.py + 40, 20);


        //potat
        fill(201, 141, 99)
        scribble.scribbleEllipse(this.px, this.py + 25, 25, 35);
        scribble.scribbleEllipse(this.px - 40, this.py + 15, 25, 35);
        scribble.scribbleEllipse(this.px - 50, this.py - 60, 35, 25);

        //beef
        fill(77, 57, 43)
        scribble.scribbleRect(this.px - 50, this.py + 30, 25, 25)
        scribble.scribbleRect(this.px - 70, this.py + 50, 25, 25)
        scribble.scribbleRect(this.px - 20, this.py - 50, 25, 25)
        scribble.scribbleRect(this.px - 100, this.py - 40, 25, 25)
    }



}