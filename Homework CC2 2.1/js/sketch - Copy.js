function preload() {
    img = loadImage('images/fork.png');
    img2 = loadImage('images/spoon.png');
    img3 = loadImage('images/wood.jpg');
    myFont = loadFont('assets/ACES07_Regular.otf');
}
var myArray = [];
var myArrayY = [];
var myArrayD = [];

class Girl {
    constructor(name ) {
        this.name = name;
    }
}

function setup() {
                bg = loadImage('images/wood.jpg');
                img = loadImage('images/fork.png');
                img2 = loadImage('images/spoon.png')
                textFont(myFont)
                createCanvas(500, 600);
                fx = 50;
                fy = 300;
                fxSpeed = 3;
                fySpeed = 3;
                startTime = millis();
                for (var i = 1; i <= 500; i++) {
                    myArray.push(i);
                }
                for (var i = 1; i <= 600; i++) {
                    myArrayY.push(i);
                }
                for (var i = 1; i <= 150; i++) {
                    myArrayD.push(i);
                }
            }
            function draw() {
                background(bg);

}
